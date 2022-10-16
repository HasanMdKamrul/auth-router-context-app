import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/UserContextPractice";

const Header = () => {

    const {user,logOut} = useContext(AuthContext)

    console.log(user)
    
    const signOutHandler = ()=>{
        logOut()
        .then(()=> console.log('user loggedOut'))
        .catch((error)=> console.log(error))
    }
  return (
    <div>
      <div className="navbar bg-base-300">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">daisyUI</NavLink>
        <NavLink className='mr-2 btn btn-ghost normal-case text-xl' to="/home">Home</NavLink>
        <NavLink className='mr-2 btn btn-ghost normal-case text-xl' to="/login">Log in</NavLink>
        <NavLink className=' btn btn-ghost normal-case text-xl' to="/Register">Register</NavLink>
        {
            user?.email && <div className=' btn btn-ghost normal-case text-xl' >Welcome <span className="text-primary ml-2">{user.email}</span></div>
        }
        {
            user?.email ?  <button onClick={signOutHandler} className="btn btn-xs bg-sky-500 text-white">Sign Out</button> :  <button onClick={signOutHandler} className="btn btn-xs bg-sky-500 text-white">
                <Link to='/login'>LogIn</Link>
            </button>
        }
       
      </div>
    </div>
  );
};

export default Header;

