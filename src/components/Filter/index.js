import React, { useState } from "react";
import * as C from "./styles";

const Filter = ({ transactionsList, setFilteredTransactions, setIncome, setExpense, setTotal }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFilter = () => {
    if (selectedCategory === "") {
      setFilteredTransactions(transactionsList);
      return;
    }

    const filteredTransactions = transactionsList.filter(
      (transaction) => transaction.category === selectedCategory
    );

    setFilteredTransactions(filteredTransactions);

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
  };

  return (
    <C.Container>
      <C.Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Todas as categorias</option>
        <option value="Carro">Carro</option>
        <option value="Casa">Casa</option>
        <option value="Fatura Carolina">Fatura Carolina</option>
        <option value="Fatura Kim">Fatura Kim</option>
        <option value="Mercadoria">Mercado</option>
        <option value="Outros">Outros</option>
        <option value="Salário">Salário</option>
        <option value="Saúde e Higiene">Saúde e Higiene</option>
      </C.Select>
      <C.Button onClick={handleFilter}>Filtrar</C.Button>
    </C.Container>
  );
};

export default Filter;