import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import EditProfile from './EditProfile'
import FeedCrad from './FeedCrad'


const Profile = () => {

const user = useSelector(store=>store.user)
// console.log(user)

  return user &&(
    <>
    <div><EditProfile user={user}/></div>
    <div></div>
    </>
  )
}

export default Profile