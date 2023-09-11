import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  const cardStyle = {
    color: item.card === "Débito" ?"green" : "orange", // Adjust colors as needed
  };
  
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>R$ {item.amount}</C.Td>
      <C.Td width={20}>{item.category}</C.Td>
      <C.Td width={10} style={cardStyle}>{item.card}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} cursor="pointer" />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;