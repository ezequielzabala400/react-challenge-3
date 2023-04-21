import React from 'react'

const Pokemon = ({id, name, sprites}) => {
  return (
    <>
        <img src={sprites.other.home.front_default} alt="" />
        <h2>{name}</h2>
        <p>ID: {id}</p>
        
    </>
  )
}

export default Pokemon