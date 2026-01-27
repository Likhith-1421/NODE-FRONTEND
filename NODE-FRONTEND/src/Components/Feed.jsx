import React, { useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { Base_Url } from '../utils/constants'
import { addfeed } from '../utils/feedSlice'

const feed = () => {
  // const feed = useSelector((store)=>store.feed)
    const dispatch = useDispatch()
    const getfeed = async () => {
    
       try{
     
        const res = await axios.get(Base_Url + "/feed",{withCredentials:true})
        dispatch(addfeed(res.data))
      
       
              
    }
    catch(err)
    {
        console.log(err)
    } 
    }

    useEffect(()=>{
       getfeed()
    },[])

    return (
        <div>feed</div>
    )
}

export default feed