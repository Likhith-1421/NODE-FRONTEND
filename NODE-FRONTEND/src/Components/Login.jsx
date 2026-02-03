import React, { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { Base_Url } from '../utils/constants';
const Login = () => {
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("")
  const[firstName,setFirstName] = useState("")
   const[lastName,setLastName] = useState("")
   const[islogin,setIsLogin] = useState(true)
  const [error,setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlesubmit = async () => {
    try {
      const res = await axios.post(Base_Url + "/login"
        , {
          emailID,
          password
        }, { withCredentials: true })
      console.log(res.data)
      dispatch(addUser(res.data))
      navigate("/feed")
    }
    catch (err) {
      setError(err?.response.data)
      console.log(err)

    }

  }

  const handleSignUp = async()=>
  {
    try{
           const res = await axios.post(Base_Url + "/signup",{firstName,lastName,emailID,password},{withCredentials:true})
           console.log(res.data)
           dispatch(addUser(res.data))
           navigate("/profile")
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
          <h2 className="card-title justify-center">{islogin ? "Login" : "SignUp"}</h2>

          <div>
             {!islogin && <><fieldset className="fieldset">
              <span className="fieldset-legend">First Name</span>
              <input type="text" value={firstName} className="input" onChange={(e) => setFirstName(e.target.value)} />

            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Name</legend>
              <input type="password" value={lastName} className="input" onChange={(e) => setLastName(e.target.value)} />
            </fieldset></>} 



            <fieldset className="fieldset">
              <span className="fieldset-legend">EmailID :</span>
              <input type="text" value={emailID} className="input" onChange={(e) => setEmailID(e.target.value)} />

            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password :</legend>
              <input type="password" value={password} className="input" onChange={(e) => setPassword(e.target.value)} />
            </fieldset>
          </div>
          <br />
          <p className='text-red-500'>{ error}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={islogin ? handlesubmit : handleSignUp}>{islogin ? "Login" : "SignUp"}</button>
          </div>
          <p onClick={()=>setIsLogin((value)=>!value)} className='m-auto cursor-pointer'>{islogin ?"New User SignUp Here" : "Exesting User Login Here"}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Login