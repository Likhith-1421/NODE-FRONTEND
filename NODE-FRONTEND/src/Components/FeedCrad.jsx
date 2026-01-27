import React from 'react'

const FeedCrad = ({user}) => {
   console.log(user)
    const {firstName,lastName,photourl} = user
  return (
    <div><div className="card bg-base-300 w-90 h-110 shadow-sm">
  <figure>
   {photourl && <img className='w-55 h-55 my-9' 
      src={photourl}
      alt="Shoes" />} 
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Intrested</button>
      <button className="btn btn-secondary">Ignore</button>
    </div>
  </div>
</div></div>
  )
}

export default FeedCrad