import React, { useState } from "react";
import * as C from "./styles";
import Grid from "../Grid";


const Form = ({ handleAdd, transactionsList, setTransactionsList, filteredTransactions, setFilteredTransactions }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState("");
    const [category, setCategory] = useState("");
    const [card, setCard] = useState("");

    const generateID = () => Math.round(Math.random() * 1000);
    
    const handleSave = () => {
        if (!desc || !amount || !category) {
            alert("Informe a descrição, o valor, a categoria e o tipo de cartão usado!")
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!")
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
            category: category,
            card: card,
        };
    
        handleAdd(transaction);
        
        setDesc("");
        setAmount("");
        setCategory("");
        setCard("");
    
    };
    
    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input className="valor-input"value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Categoria</C.Label>
                    <C.Select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Selecione uma categoria</option>
                        <option value="Mercado">Mercado 🛒</option>
                        <option value="Carro">Carro 🚗</option>
                        <option value="Casa">Casa 🏠</option>
                        <option value="Fatura Carolina">Fatura Carolina 💳</option>
                        <option value="Fatura Kim">Fatura Kim 💳</option>
                        <option value="Outros">Outros 🧩</option>
                        <option value="Salário">Salário 💵</option>
                        <option value="Saúde e Higiene">Saúde e Higiene 🌡️🧼</option>
                    </C.Select>
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Cartão</C.Label>
                    <C.Select 
                        value={card}
                        onChange={(e) => setCard(e.target.value)}
                    >
                        <option value="">Selecione o tipo de cartão</option>
                        <option value="Crédito">Crédito</option>
                        <option value="Débito">Débito</option>
                    </C.Select>
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setExpense(!isExpense)} />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                    <C.Input type="radio" id="rExpenses" name="group1" onChange={() => setExpense(!isExpense)} />
                    <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>
                
                <C.Button onClick={handleSave}>ADD</C.Button>
            </C.Container>
            <Grid items={transactionsList} setItens={setTransactionsList} filteredTransactions={filteredTransactions} setFilteredTransactions={setFilteredTransactions} />
        </>
    )
}

export default Form;
