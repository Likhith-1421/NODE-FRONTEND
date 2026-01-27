import React from 'react'

const FeedCrad = ({user}) => {
   console.log(user)
    const {firstName,lastName,photourl,emailID} = user
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
      <button className="btn btn-primary">Intrested</button>
      <button className="btn btn-secondary">Ignore</button>
    </div>
  </div>
</div></div>
  )
}

export default FeedCrad