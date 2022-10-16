import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/UserContextPractice";

const Header = () => {

    const {displayName} = useContext(AuthContext)
    
    
  return (
    <div>
      <div className="navbar bg-base-300">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">daisyUI</NavLink>
        <NavLink className='mr-2 btn btn-ghost normal-case text-xl' to="/home">Home</NavLink>
        <NavLink className='mr-2 btn btn-ghost normal-case text-xl' to="/login">Log in</NavLink>
        <NavLink className=' btn btn-ghost normal-case text-xl' to="/Register">Register</NavLink>
        {
            displayName && <div className=' btn btn-ghost normal-case text-xl' >Welcome <span className="text-primary ml-2">{displayName}</span></div>
        }
      </div>
    </div>
  );
};

export default Header;

