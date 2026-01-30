import { useEffect } from 'react'
import { Base_Url } from '../utils/constants'
import axios from 'axios'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/ConnectionSlice'

const Connections = () => {
    const dispatch = useDispatch()
    const connections = useSelector((store) => store.connections)
    console.log(connections)
    const fetchConnections = async () => {

        try {
            const res = await axios.get(Base_Url + "/User/connections", { withCredentials: true })
            console.log(res.data.data)
            dispatch(addConnection(res.data.data))
        }
        catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchConnections()
    }, [])

    if (!connections) return
    if (connections.length == [0]) {

        return <h1 className='flex justify-center my-9'>NO CONNECTIONS </h1>
    }
    return (

        <div >

            <h1 className='flex justify-center my-9'>Connections</h1>

            {connections.map((connect) => {
                const { firstName, lastName, age, gender, photourl } = connect
                return (
                    <div className='flex justify-center gap-8 border-none bg-base-300 rounded-lg w-1/2 h-20 m-auto '>
                        <div >
                            <img src={photourl} className='w-15 h-15 my-3 rounded-full ' />
                        </div>
                        <div className='text-sm my-3.5'>
                            <h6 >{firstName + " " + lastName}</h6>
                         
                            {age && gender && <h3>age-{age + " ," + gender}</h3>}
                        </div>




                    </div>)
            }
            )
            }



        </div>


    )
}

export default Connections