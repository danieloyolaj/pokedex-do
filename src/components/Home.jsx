import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerName } from '../store/slices/trainerName.slice'

const Home = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const inputvalue = e.target.name.value.trim()
        if(inputvalue.length !== 0) {
            dispatch(setTrainerName(inputvalue))
            navigate('/pokedex')
        }
        e.target.name.value = ""

    }

  return (
    <div className="container">
        <div className="header-container">
        <div className="pokedex-title">
            <img className='image-title' src="./src/assets/pokedex-title.png" alt="" />
        </div>

        <h1 className='title'>Hi trainer!</h1>
        <p className='title-description'>To start, give me your name</p>
        <form onSubmit={handleSubmit}>
            <input id='name' type="text" placeholder='Your name...' required />
            <button className='btn-catch'>Catch them all</button>
        </form>
        </div>
        <footer className='home-footer'>
            <div className="footer-top">
                <div className="ellipse-one"></div>
            </div>
            <div className="footer-bottom">
                <div className="ellipse-two"></div>
            </div>
        </footer>
    </div>
  )
}

export default Home