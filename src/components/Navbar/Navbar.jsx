import React from 'react'
import { LogoNavbarStyled, NavbarContainerStyled, NavbarLinkStyled, NavbarListStyled } from './NavbarStyles'
import Logo from '../../../public/img/logo.png'
const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <LogoNavbarStyled>
            <img src={Logo} alt="" />
        </LogoNavbarStyled>
        <NavbarListStyled>
            <li><NavbarLinkStyled to={'/'}>Home</NavbarLinkStyled></li>
            <li><NavbarLinkStyled to={'pokemon'}>Buscá tu pokemon</NavbarLinkStyled></li>
            <li><NavbarLinkStyled to={'todo'}>Lista de tareas</NavbarLinkStyled></li>
        </NavbarListStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar