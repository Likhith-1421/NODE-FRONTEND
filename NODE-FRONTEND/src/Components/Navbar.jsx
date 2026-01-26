import {useSelector} from "react-redux"
const Navbar = () => {
  const user = useSelector((store)=>store.user)
  return (
    <div><div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DEV TINDER</a>
      </div>
      <div className="flex gap-2">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        
       { user && (<div className="dropdown dropdown-end  flex justify-center mx-3 gap-3 ">
        
         <p className="my-2">Welcome {user.firstName}😊</p>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photourl} />
               
            </div>
             
          </div>
         
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a >Logout</a></li>
          </ul>
        </div>)}
      </div>
    </div></div>
  )
}

export default Navbar


