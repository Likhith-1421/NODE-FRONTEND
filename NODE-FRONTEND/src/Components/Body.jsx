import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'
const Body = () => {
  const user = useSelector(store=>store.user)
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>

       {user && <h1>WELCOME {user.firstName}</h1>} 
    </div>
  )
}

export default Body