import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Base_Url } from '../utils/constants'
import { addUser } from '../utils/userslice'
import axios from "axios"

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const fetchUser = async () => {
    try {
      const res = await axios.get(Base_Url + "/profile/view", {
        withCredentials: true
      })
      dispatch(addUser(res.data))
    } catch (err) {


      navigate("/login")

      console.log(err)
    }


  }
  useEffect(() => {
    fetchUser()
  }, [])


  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}

export default Body