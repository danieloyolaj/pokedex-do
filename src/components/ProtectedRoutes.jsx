import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

  const trainerName = useSelector(state => state.trainerName) //Trae informacion de la store

  if (trainerName) {
    return <Outlet />
  }else{
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes