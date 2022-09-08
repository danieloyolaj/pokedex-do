import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonStats from './PokemonStats'
import { useNavigate  } from 'react-router-dom'

const PokemonCard = ({url}) => {
    const [pokemon, setPokemon] = useState()

    const navigate = useNavigate()

    useEffect(() =>{
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = () => navigate(`/pokedex/${pokemon.id}`)

  return (
    <div onClick={handleClick} className='pokemon-card'>
        <header className='pokemon-card-header'>
            <div className="pokemon-card-header-image">
            <img className='pokemon-card-img' src={pokemon?.sprites.other['official-artwork']['front_default']} alt="" />
            </div>
        </header>
        <section className='pokemon-body'>
            <h3 className='pokemon-card-title'>{pokemon?.name}</h3>
            
                
                <div className='pokemon-type'>
                    {
                        pokemon?.types.map(slot =>(
                        <span key={slot.type.url}> {slot.type.name + ' '}</span>
                        ))
                    }
                </div>
                
            
            <p className='pokemon-type-title'>Type</p>
            <hr />
        </section>
        <footer className='pokemon-card-footer'>
            <div>
                {
                    pokemon?.stats.map(stat => (
                        <PokemonStats 
                            key={stat.stat.url}
                            infoStat={stat}
                        />
                    ))
                }
            </div>
        </footer>
    </div>
  )
}

export default PokemonCard