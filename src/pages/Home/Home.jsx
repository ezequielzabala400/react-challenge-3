import React, { useContext } from 'react'
import { HomeLink, HomeWrapperStyled } from './HomeStyles'
import Logo from '../../../public/img/house.png'
import { PendingTasks } from '../../context/pendingTasks'
const Home = () => {

  const {tasksPending} = useContext(PendingTasks);

  console.log(tasksPending);

  return (
    <HomeWrapperStyled>
        <h1>Bienvenido!!! <img src={Logo} alt="" /></h1>
        <p>Link para ir a la lista de tareas: <HomeLink to={'todo'} tasks={tasksPending}>{tasksPending.length > 0 ? 'Hay tareas pendientes!' : 'No hay tareas pendientes'}</HomeLink></p>
    </HomeWrapperStyled>
  )
}

export default Home