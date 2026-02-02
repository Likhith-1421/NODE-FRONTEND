
import React, { useEffect } from 'react'
import axios from 'axios'
import { Base_Url } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequests } from '../utils/PendingSlice'

const PendingRequests = () => {
    const dispatch = useDispatch()
    const requests = useSelector(store=>store.pending)
    console.log(requests)

    const RequestConnection = async(status,_id) =>{
        const res = await axios.post(Base_Url + "/review/" + status + "/" + _id,{},{withCredentials:true})
        dispatch(removeRequests(_id))
        console.log(res)
    }

    const fetchRequests = async () => {
        try {
            const res = await axios.get(Base_Url + "/User/pending/requests",
                { withCredentials: true })
                console.log(res.data)
                dispatch(addRequests(res.data))
        }

        catch (err) {
              console.log(err)
        }

    }
  

    useEffect(()=>{
      fetchRequests()
    },[])
      if(requests.length===0)
    {
        return <h1 className='flex justify-center my-10'>No Requests</h1>
    }
    return (
        <div>
            <h1 className='flex justify-center my-9'>Pending Requests</h1>

          {requests.map((connect) => {
                const { _id,firstName, lastName, age, gender, photourl,about } = connect.formUserID
                return (
                    <div className='flex flex-row iteams-center  justify-between  border-none my-2 bg-base-300 rounded-lg w-3/4 h-30 m-auto '>
                        <div >
                            <img src={photourl} key={_id}className='w-15 h-15 my-5 mx-3 rounded-full ' />
                        </div>
                        <div className='text-sm my-5'>
                            <h6 className='text-lg '>{firstName + " " + lastName}</h6>
                         
                            {age && gender && <h3>age-{age + " ," + gender}</h3>}
                            {/* <h3 className='text-xs '>{about}</h3> */}

                           
                        </div>


                           <div className='my-5 flex gap-1'>
                                <button className="btn btn-primary"onClick={()=>RequestConnection("ACCEPTED",connect._id)}>Accepte</button>
                                <button className="btn btn-secondary mx-2"onClick={()=>RequestConnection("REJECTED",connect._id)}>Rejecte</button>
                            </div>

                    </div>)
            }
            )
            }

         

        </div>
    )
}

export default PendingRequests