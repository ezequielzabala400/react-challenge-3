import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapperStyled = styled.div`
    height: calc(100vh - 70px);
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: self-start;
    gap: 30px;
    padding-top: 70px;
    padding-left: 60px;

    h1{
        font-size: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 60px;
        img{
            height: 200px;
        }
    }
`

export const HomeLink = styled(Link)`
    color: ${({tasks}) => tasks.length > 0 ? 'red' : 'white'};
    text-decoration: none;
`