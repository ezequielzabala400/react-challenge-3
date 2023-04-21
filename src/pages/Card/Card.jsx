import React, { useRef, useState } from 'react'
import { CardContainerStyled, CardTitleStyled, CardWrapperStyled, SearchContainerStyled } from './CardStyles'
import InputContainer from '../../components/UI/Input/InputContainer'
import Button from '../../components/UI/Button/Button'
import axios from 'axios'
import Pokemon from '../../components/Pokemon/Pokemon'
const CardPokemon = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)

    const inputValueRef = useRef();

    const findPokemon = async (e) => {
        try{
            e.preventDefault();
            let value = inputValueRef.current.value;
            if(value.length === 0) {
                setData(null)
                setError('El input esta vacío')
                return;
            }

            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}/`)
            inputValueRef.current.value = '';
            console.log(data);
            setData(data)
        }
        catch{
            inputValueRef.current.value = '';
            setData(null)
            setError('Pokemon no encontrado')
        }
    }


  return (
    <CardWrapperStyled>
        <SearchContainerStyled onSubmit={findPokemon}>
            <InputContainer>
            <input type="number" name="" id="" ref={inputValueRef}/>
            </InputContainer>
            <Button>
                <button>Buscar</button>
            </Button>
        </SearchContainerStyled>
        <CardContainerStyled>
            {data ? <Pokemon {...data}/> : <CardTitleStyled error={error ? true : false}>{error ? error : 'Buscá tu pokemon'}</CardTitleStyled>}
        </CardContainerStyled>
    </CardWrapperStyled>
  )
}

export default CardPokemon