import styled from "styled-components";


export const InputContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        width: 300px;
        padding: 12px;
        background-color: #131415;
        color: white;
        border-radius: 50px;
    }
    small{
        padding-top: 6px;
        font-size: 16px;
        color: red;
    }
`