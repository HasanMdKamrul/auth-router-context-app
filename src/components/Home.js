import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContextPractice";

const Home = () => {
    
    const {user} = useContext(AuthContext);

    const {email} = user;

  return (
    <div>
     <h1>This is home</h1>
     {
        email && <p>{email}</p>
     }
    </div>
  );
};

export default Home;
