import React from 'react';
import * as C from "./styles";

const Vencimentos = () => {
    return (
        <C.Container>
            <C.Header>
                <C.Tittle>Vencimentos:</C.Tittle>
            </C.Header>

            <C.Table>
               <C.Thead>
                    <C.Tr>
                        <C.Th width={55}>Descrição</C.Th>
                        <C.Th width={30}>Data Fechamento</C.Th>
                        <C.Th width={30}>Data Vencimento</C.Th>
                    </C.Tr>
                </C.Thead>
                <C.Tbody>
                <C.Tr>
                        <C.Td>Dentista</C.Td>
                        <C.Td>---</C.Td>
                        <C.Td>Dia 5</C.Td>
                </C.Tr>
                <C.Tr>
                        <C.Td>Telefone</C.Td>
                        <C.Td>---</C.Td>
                        <C.Td>Dia 7</C.Td>
                </C.Tr>
                <C.Tr>
                        <C.Td>Conta de Água</C.Td>
                        <C.Td>--- </C.Td>
                        <C.Td>Dia 10</C.Td>
                </C.Tr>
                <C.Tr>
                        <C.Td>Cartão de Crédito - Kim</C.Td>
                        <C.Td>Dia 30 </C.Td>
                        <C.Td>Dia 10</C.Td>
                </C.Tr>
                <C.Tr>
                        <C.Td>Cartão de Crédito - Carolina</C.Td>
                        <C.Td>Dia 07 </C.Td>
                        <C.Td>Dia 13</C.Td>
                </C.Tr>
                <C.Tr>
                        <C.Td>Conta de Energia</C.Td>
                        <C.Td>--- </C.Td>
                        <C.Td>Dia 15</C.Td>
                </C.Tr>
                </C.Tbody> 
            </C.Table>
        </C.Container>
    )
}

export default Vencimentos;