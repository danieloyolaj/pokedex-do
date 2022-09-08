import axios from 'axios'
import React from 'react'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import PokemonStats from './Pokedex/PokemonStats'



const PokemonDetails = ({url}) => {

  const [character, setCharacter] = useState()
  
  const { id } = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`

    axios.get(URL)
      .then(res => setCharacter(res.data))
      .catch(err => console.log(err))
  }, [])
  
  // console.log(character);

  return (
    <div className="pokemon-details-container">
      <div className="detail-container">

      <div className="character-image-parent">
        <div className="character-image-container">
          <img className="character-image" src={character?.sprites.other['official-artwork']['front_default']} alt="" />
        </div>
      </div>
          <div className="cha-img-container-bg"></div>
        <h2 className='character-order'>#{character?.order}</h2>
        <h1 className='character-name'>{character?.name}</h1>
        <div className="char-weight-height-container">
          <p className='character-weight'>Weight</p>
          <p className='character-height'>Height</p>
        </div>
        <div className="char-weight-height-container">
          <p className='character-weight-data'>{character?.weight}</p>
          <p className='character-height-data'>{character?.height}</p>
        </div>

        <div className="character-type-skills-container">
          <div className="character-type-container">
            <h4>Type</h4>
              <p>
                {
                  character?.types.map(slot =>(
                    <span key={slot.type.url}> {slot.type.name + ' '}</span>
                    ))
                }
                </p>
          </div>
          
          <div className="character-skills-container">
            <h4>Skills</h4>
              <p>
                {
                  character?.abilities.map(ability => (
                    <span key={ability.type?.url}>
                      {ability.ability.name}
                    </span>
                  ))
                }
              </p>
          </div>
        
        </div>

        <div className="pokemon-details-stats">
          <h2>Stats</h2>
          <div className='pokemon-details-stats-container'>
            <div className='pokemon-details-stats-data'>
              {
                character?.stats.map(stat => (
                  <PokemonStats 
                      key={stat.stat.url}
                      infoStat={stat}
                  />
              ))
              }
              </div>
          </div>
        </div>
      </div>

      <div className="movement-container">
        <h2>Movements</h2>
            <span>
              {
                character?.moves.map(move => (
                  <span className='movements-chips' key={move.move.name}>
                    {move.move.name + " "}
                  </span>
                ))
              }
            </span>
      </div>
    </div>
  )
}

export default PokemonDetails