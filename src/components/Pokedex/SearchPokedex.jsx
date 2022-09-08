import React from 'react'

const SearchPokedex = ({ setPokeSearch, setOptionType }) => {

    const handleSubmit = e => {
        e.preventDefault()
        setPokeSearch(e.target.searchText.value.trim().toLowerCase());
        setOptionType('All')
        e.target.searchText.value = '' //resets the input
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className='pokedex-input' type="text" id='searchText' />
            <button className='btn-search'>Search</button>
        </form>
    </div>
  )
}

export default SearchPokedex