import React, { createContext } from 'react';
import {getAuth,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword} from 'firebase/auth'
import { app } from '../../../firebase.config';
export const Context = createContext();



const AuthContext = ({ children }) => {
    const auth = getAuth(app)
   
    const signUp = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
    }
    
    const profile = (user,name,photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL : photo
        })
    }

    const value = {
        signUp,
        profile,
        signIn
}

    return (
        <Context.Provider value={value}>
            {children}
         </Context.Provider>
    );
};

export default AuthContext;