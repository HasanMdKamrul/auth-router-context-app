import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContextPractice";

const Home = () => {
    
    const {user} = useContext(AuthContext);

    

  return (
    <div>
     <h1>This is home</h1>
     {
        user?.email && <p>{user.email}</p>
     }
    </div>
  );
};

export default Home;
