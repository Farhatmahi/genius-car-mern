import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app2 from '../../Firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app2)

 const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const google = new GoogleAuthProvider;
    const signInWithGoogle = () => {
        return signInWithPopup(auth, google)
    }

    

    const authInfo = {user, loading, createUser, signInWithGoogle}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;