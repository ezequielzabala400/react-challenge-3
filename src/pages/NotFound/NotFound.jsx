import React from 'react'
import { NotFoundWrapper } from './NotFoundStyles'
import Emoji from '../../../public/img/emoji.png'
const NotFound = () => {
  return (
    <NotFoundWrapper>
        <h2>Página no encontrada <img src={Emoji} alt="" /></h2>
    </NotFoundWrapper>
  )
}

export default NotFound