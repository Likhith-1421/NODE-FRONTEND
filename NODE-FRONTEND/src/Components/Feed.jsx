import  { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { Base_Url } from '../utils/constants'
import { addfeed } from '../utils/feedSlice'
import FeedCrad from './FeedCrad'

const feed = () => {
    const feed = useSelector((store) => store.feed)
    const user = useSelector((store) =>store.user)
     const[login,setLogin] = useState(false)
    const dispatch = useDispatch()
    const getfeed = async () => {
        try {

            const res = await axios.get(Base_Url + "/feed", { withCredentials: true })
            dispatch(addfeed(res.data))
            setLogin(true)
            setTimeout(()=>{
                setLogin(false)
            },3000)
        }
        catch (err) {
            console.log(err)
        }
    }

  useEffect(()=>{

   getfeed()
  },[])

    return (
     <>
      {  feed &&
        <div className=' flex justify-center my-4 '><FeedCrad user={feed[0]} /></div>
      }

        
        
    <div className="toast toast-top toast-center">
 
  { login && <div className="alert alert-success">
    <span>Hello  {user.firstName}</span>
  </div>}
  
</div>
       </> 
        
    )
}

export default feed