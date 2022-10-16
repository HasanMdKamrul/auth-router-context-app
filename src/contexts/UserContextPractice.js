import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContextPractice = ({children}) => {

    const [user,setUser] = useState({displayName:'Kamrul'});

    
    const createUser = (email,password)=> createUserWithEmailAndPassword(auth,email,password);
    const signIn = (email,password) => signInWithEmailAndPassword(auth,email,password);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            
            currentUser && setUser(currentUser);

            console.log('currentuser', currentUser);
        });


        // ** cleanup function

        return ()=> unsubscribe();

    },[])

    const authInfo = {user,createUser,signIn}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContextPractice;