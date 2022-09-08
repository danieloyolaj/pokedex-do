import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'
import Home from './components/Home'
import './App.css'
import Error404 from './components/Error404'

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokemonDetails />} />
          </Route>
          <Route path='*' element={ <Error404 /> }/>
      </Routes>
    </div>
  )
}

export default App
