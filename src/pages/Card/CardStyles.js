import styled from "styled-components";

export const CardWrapperStyled = styled.div`
    height: calc(100vh - 70px);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

export const SearchContainerStyled = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const CardContainerStyled = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    border-radius: 20px;
    
    padding: 30px;
    height: 500px;
    width: 500px;

    img{
        object-fit: contain;
        height: 50%;
        padding-bottom: 40px;
    }

    h2{
        font-size: 46px;
    }
    p{
        font-size: 20px;
    }
`

export const CardTitleStyled = styled.h2`
    text-align: center;
    color: ${({error}) => error ? 'red' : 'var(--green)'};
`