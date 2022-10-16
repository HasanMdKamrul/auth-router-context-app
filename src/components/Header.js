import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">daisyUI</NavLink>
        <NavLink className='mr-2 btn btn-ghost normal-case text-xl' to="/home">Home</NavLink>
        <NavLink className='mr-2 btn btn-ghost normal-case text-xl' to="/login">Log in</NavLink>
        <NavLink className=' btn btn-ghost normal-case text-xl' to="/Register">Register</NavLink>
      </div>
    </div>
  );
};

export default Header;

