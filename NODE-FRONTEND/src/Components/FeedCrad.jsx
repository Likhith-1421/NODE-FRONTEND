import React from 'react'
import { Base_Url } from '../utils/constants'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removefeed } from '../utils/feedSlice'

const FeedCrad = ({user}) => {
  console.log(user)
    const {_id,firstName,lastName,photourl,emailID} = user
const dispatch= useDispatch()
const SendRequest = async(status,_id) =>
{
  try{
  const res = await axios.post(Base_Url + "/sendRequest/" + status + "/" + _id,{},{ withCredentials: true })
  console.log(res)
  dispatch(removefeed(_id))
  } 
  catch(err) 
  {
     console.log(err)
  }

}


 
  return (
    <div><div className="card bg-base-300 w-90 h-110 shadow-sm rounded-md">
  <figure>
   {photourl && <img className='w-55 h-55 my-9 rounded-md' 
      src={photourl}
      alt="Shoes" />} 
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    <p> Email : {emailID}</p>
    <div className="card-actions justify-end my-2">
      <button className="btn btn-primary" onClick={()=>SendRequest("INTRESTED",_id)} >Intrested</button>
      <button className="btn btn-secondary" onClick={()=>SendRequest("IGNORED",_id)} >Ignore</button>
    </div>
  </div>
</div></div>
  )
}

export default FeedCrad