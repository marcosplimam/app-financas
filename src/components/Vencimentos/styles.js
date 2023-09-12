import styled from "styled-components";

export const Container = styled.div`
    height: 500px;
    text-align: center;
    background: teal;
    border-radius: 5px;
    position: absolute;
    width: 71%;
    top: 1200px;
    left: 50%;
    transform: translate(-50%, -50%);
   
    `;

export const Header = styled.h1``;

export const Tittle = styled.div`
    padding-top: 20px;
    color: #fff;
`;

export const Table = styled.table`
  width: 95%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
  }
`;