import React, { createContext ,useEffect, useState} from 'react';
import {getAuth,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { app } from '../../../firebase.config';
 
export const Context = createContext();



const AuthContext = ({ children }) => {
    const auth = getAuth(app)
   const [user,setUser] = useState(null)



    const signUp = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ( ) => {
   return signOut(auth)
    }
    
    const profile = (user,name,photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL : photo
        })
    }

    useEffect(() => {
     const subscribe = onAuthStateChanged(auth,(user)=>{
        setUser(user)
     })  
     
        return () => {
            subscribe()
        }

    },[])

    const value = {
        signUp,
        profile,
        signIn,
        logOut,
        user
}

    return (
        <Context.Provider value={value}>
            {children}
         </Context.Provider>
    );
};

export default AuthContext;