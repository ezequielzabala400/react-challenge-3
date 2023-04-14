import React from 'react'
import { ButtonContainerStyled} from './ButtonStyles'

const Button = ({children}) => {
  return (
    <ButtonContainerStyled>{children}</ButtonContainerStyled>
  )
}

export default Button