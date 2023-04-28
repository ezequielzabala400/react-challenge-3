import React, { useContext } from 'react'
import { HomeLink, HomeWrapperStyled } from './HomeStyles'
import Logo from '../../../public/img/house.png'
import { useSelector } from 'react-redux'
const Home = () => {

  const pendingTasks = useSelector((state) => state.tasks.tasks)

  return (
    <HomeWrapperStyled>
        <h1>Bienvenido!!! <img src={Logo} alt="Logo"/></h1>
        <p>Link para ir a la lista de tareas: <HomeLink to={'todo'} tasks={pendingTasks}>{pendingTasks.length > 0 ? 'Hay tareas pendientes!' : 'No hay tareas pendientes'}</HomeLink></p>
    </HomeWrapperStyled>
  )
}

export default Home