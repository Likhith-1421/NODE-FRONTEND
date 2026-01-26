import React, { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userslice';
import { useNavigate } from 'react-router-dom';
import { Base_Url } from '../utils/constants';
const Login = () => {
const [emailID,setEmailID] = useState("");
const [password,setPassword] = useState("")
const dispatch = useDispatch()
const navigate = useNavigate()

const handlesubmit = async() =>
{
  try{ 
    const res =  await axios.post(Base_Url + "/login"
,{
    emailID,
    password
  },{withCredentials:true})
// console.log(res.data)
dispatch(addUser(res.data))
navigate("/")
}
  catch(err)
  {
    console.log(err)
  }

}
  return (
    <div className='flex justify-center my-20'>
      <div className="card card-dash bg-base-300 w-96">
  <div className="card-body">
    <h2 className="card-title justify-center">Login😊</h2>

<div>
  <fieldset className="fieldset">
  <span className="fieldset-legend">EmailID :</span>
  <input type="text" value={emailID} className="input"onChange={(e)=>setEmailID(e.target.value)} />
  
  </fieldset>
   <fieldset className="fieldset">
  <legend className="fieldset-legend">Password :</legend>
  <input type="password" value={password} className="input" onChange={(e)=>setPassword(e.target.value)}/>
  </fieldset>
</div>
<br/>

    <div className="card-actions justify-end">
      <button className="btn btn-primary"onClick={handlesubmit}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login