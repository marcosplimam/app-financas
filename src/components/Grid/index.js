import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({ filteredTransactions, setItens, setFilteredTransactions }) => {
  const onDelete = (ID) => {
    const newArray = filteredTransactions.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    setFilteredTransactions(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={15}>Valor</C.Th>
          <C.Th width={20}>Categoria</C.Th>
          <C.Th width={10}>Cartão</C.Th>
          <C.Th width={10} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {filteredTransactions?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;