import React, { createContext ,useEffect, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth'
 import { app } from '../../firebase.config';
 
export const Context = createContext();



const AuthContext = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
   const googleProvider = new GoogleAuthProvider();


    const signUp = (email, password) => {
        setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password) => {
        setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
    }

    const signinGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

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
            setLoading(false)
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
       signinGoogle,
        user,
        loading
}

    return (
        <Context.Provider value={value}>
            {children}
         </Context.Provider>
    );
};

export default AuthContext;