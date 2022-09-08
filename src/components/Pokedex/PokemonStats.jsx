import React from 'react'

const PokemonStats = ({infoStat}) => {
  return (
    <div className='pokemon-stats-container'>
      <h4 className='pokemon-stats-title poke-detail-stats'>{infoStat.stat.name}</h4>
      <div className='pokemon-stats poke-detail-stats-data'>{infoStat.base_stat}</div>
    </div>
  )
}

export default PokemonStats