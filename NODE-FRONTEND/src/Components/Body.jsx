import React, { useEffect } from 'react'
import {Outlet} from "react-router-dom"
import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Base_Url } from '../utils/constants'
import { addUser } from '../utils/userslice'
import axios from "axios"

const Body = () => {
  // const user = useSelector(store=>store.user)
const dispatch = useDispatch()
const fetchUser = async()=>{
 const res = await axios.get(Base_Url + "/profile/view",{
  withCredentials:true
 })
 console.log(res.data)
 dispatch(addUser(res.data))
}

useEffect(()=>{
   fetchUser()
},[])


  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>

       {/* {user && <h1>WELCOME {user.firstName}</h1>}  */}
    </div>
  )
}

export default Body