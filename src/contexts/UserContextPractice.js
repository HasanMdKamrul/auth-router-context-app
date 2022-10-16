import { getAuth } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContextPractice = ({children}) => {

    const [user,setUser] = useState({displayName:'Kamrul'})

    return (
        <div>
            <AuthContext.Provider value={user}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContextPractice;