import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainerStyled = styled.nav`
    width: 100%;
    height: 70px;
    background-color: #131415;
    padding: 12px 20px;
    border-bottom: 2px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoNavbarStyled = styled.div`
    img{
        height: 60px;
        padding-bottom: 10px;
    }
`

    export const NavbarListStyled = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;
`

export const NavbarLinkStyled = styled(NavLink)`
        text-decoration: none;
        color: white;
        &:hover{
            color: var(--Gren);
        }
        &.active{
            color: var(--Gren);
        }
`