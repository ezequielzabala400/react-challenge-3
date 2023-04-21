import React from 'react'
import ToDo from '../../pages/ToDo/ToDo'
import Navbar from '../Navbar/Navbar'
import CardPokemon from '../../pages/Card/Card'
import Home from '../../pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../../pages/NotFound/NotFound'

const Layout = () => {

  return (
    <>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='pokemon' element={<CardPokemon />}/>
            <Route path='todo' element={<ToDo />}/>
            <Route path='*' element={<NotFound />} />
          </Routes>

    </>
  )
}

export default Layout