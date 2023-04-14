import React from 'react'
import { InputContainerStyled } from './InputContainerStyles'
const InputContainer = ({children}) => {
  return (
    <InputContainerStyled>{children}</InputContainerStyled>
  )
}

export default InputContainer