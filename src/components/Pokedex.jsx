import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import PokemonCard from './Pokedex/PokemonCard'
import { useSelector } from 'react-redux'
import SearchPokedex from './Pokedex/SearchPokedex'
import PokemonStats from './Pokedex/PokemonStats'
import SelectType from './Pokedex/SelectType'
import ReactPaginate from 'react-paginate'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')

  useEffect(() => {
    let URL 
    if(optionType !== 'All'){
      //when user filters by type
      URL = `https://pokeapi.co/api/v2/type/${optionType}`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results: arr})
        })
        .catch(err => console.log(err))
    } else if(pokeSearch){
        //when user search with input
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
        
        const obj = {
          results: [{url}]
        }
        setPokemons(obj)
    } else{
      //when user wants all pokemons
      URL = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=1'
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }
  }, [pokeSearch, optionType])

  console.log(pokeSearch)

  const trainerName = useSelector(state => state.trainerName)

  return (
    <div className="cards-container">
      <div className="cards-container-header">
        <div className="card-container-header-one">
          <img className='pokedex-logo' src="./src/assets/pokedex-title.png" alt="" />
          <div className="pokedex-ellipse-one"></div>
        </div>
        <div className="card-container-header-two">
          <div className="pokedex-ellipse-two"></div>
        </div>
        </div>{/* end div cards-container-header */}
        <div className="cards-body-container">
          <div className="cards-container-form">
            <h3 className="cards-container-title">Welcome {trainerName}, here you can find your favorite pokemon</h3>
            <div className='pokedex-form'>
              
              <SearchPokedex setPokeSearch={setPokeSearch} setOptionType={setOptionType} />
              <SelectType 
                optionType={optionType} 
                setOptionType={setOptionType}
                setPokeSearch={setPokeSearch}
                />

            </div>
          </div>
          <div className="pokedex-card">
            {
              pokemons?.results.map(pokemon => (
                <PokemonCard
                  key={pokemon.url}
                  url={pokemon.url}
                />
              ))
            }
          </div>
      </div>{/* end card-body-container*/}
      <footer className='pokedex-footer'>
        <div className="container">
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              pageCount={10}
              // onPageChange={handlePageClick}
              containerClassName={'page-container'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              activeClassName={'page-active'}
            />
        </div>
        <div className="pokedex-footer-top"></div>
        <div className="pokedex-footer-bottom"></div>
      </footer>
    </div>
  )
}

export default Pokedex