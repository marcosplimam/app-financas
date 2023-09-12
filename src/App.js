import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import Vencimentos from "./components/Vencimentos";
import Filter from "./components/Filter";


const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [filteredTransactions, setFilteredTransactions] = useState([]); // Add state for filtered transactions
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate totals based on filtered transactions
    const amountExpense = filteredTransactions
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = filteredTransactions
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expenseTotal = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const incomeTotal = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    setIncome(`R$ ${incomeTotal}`);
    setExpense(`R$ ${expenseTotal}`);
    setTotal(
      `${Number(incomeTotal) < Number(expenseTotal) ? "-" : ""} R$ ${Math.abs(
        incomeTotal - expenseTotal
      ).toFixed(2)}`
    );
  }, [filteredTransactions]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);
    setFilteredTransactions(newArrayTransactions); // Update filteredTransactions

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
        filteredTransactions={filteredTransactions} // Pass filteredTransactions here
      />
      <Filter
        transactionsList={transactionsList}
        setFilteredTransactions={setFilteredTransactions}
        setIncome={setIncome}
        setExpense={setExpense}
        setTotal={setTotal}
      />
      <Vencimentos />
      <GlobalStyle />
    </>
  );
};

export default App;