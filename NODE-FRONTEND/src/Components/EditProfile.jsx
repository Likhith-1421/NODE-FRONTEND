import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Base_Url } from '../utils/constants';
import { addUser } from '../utils/userslice';
import axios from 'axios';
const EditProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [photourl, setPhotoUrl] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSave = async () => {
       try{
          const res = await axios.post(Base_Url + "/profile/edit",{firstName,lastName,age,gender,phoneNumber,photourl}
            ,{withCredentials:true})
            console.log(res.data)
            dispatch(addUser(res.data))
       }
       catch(err)
       {

       }
    }
    return (
        <div>


            <div className='flex justify-center my-20'>
                <div className="card card-dash bg-base-300 w-96">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Edit Profile 🖊️</h2>

                        <div>
                            <fieldset className="fieldset">
                                <span className="fieldset-legend">First Name</span>
                                <input type="text" value={firstName} className="input" onChange={(e) => setFirstName(e.target.value)} />

                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Last Name</legend>
                                <input type="text" value={lastName} className="input" onChange={(e) => setLastName(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Age</legend>
                                <input type="text" value={age} className="input" onChange={(e) => setAge(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Gender</legend>
                                <input type="text" value={gender} className="input" onChange={(e) => setGender(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Phone Number</legend>
                                <input type="text" value={phoneNumber} className="input" onChange={(e) => setPhoneNumber(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Photo Url</legend>
                                <input type="text" value={photourl} className="input" onChange={(e) => setPhotoUrl(e.target.value)} />
                            </fieldset>
                        </div>
                        <br />

                        <div className="card-actions justify-end ">
                            <button className="btn btn-primary" onClick={handleSave}>Save Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile