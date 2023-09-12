import styled from "styled-components";

export const Container = styled.div`
    max-width: 250px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 750px) {
        display: grid;
    } 
`;


export const Label = styled.label``;

export const Button = styled.button`
    padding: 5px 10px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: teal;
`;

export const Select = styled.select`
    font-family: 'Poppins', sans-serif;
`;

