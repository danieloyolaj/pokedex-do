import React from 'react'
import { Link } from 'react-router-dom'
import imageError from '../assets/error.png'

const Error404 = () => {
  return (
    <div className='error-container'>
        <h1 className='error-404'>404</h1>
        <h2>No can do amigo!!!</h2>
        <h3 className='error-sorry'>Sorry trainer, I could not find the page you are looking for...</h3>

        {<Link  to='/' className='btn-error'>Home</Link>}

        <div className="error-image">
            <img className='error-pokemon' src={imageError} alt="" />
        </div>
    </div>
  )
}

export default Error404