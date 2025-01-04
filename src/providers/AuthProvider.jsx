/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
     }
     
     const updateUserProfile = (updateData) =>{
        return updateProfile(auth.currentUser,updateData);
     }
    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        isDarkMode,
        setIsDarkMode,
        createUser,
        userLogin,
        logOut,
        updateUserProfile
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('state captured', currentUser?.email)
            if(currentUser?.email){
                const user = { email: currentUser.email };

                axios.post('https://assignment-eleven-server-nu.vercel.app/jwt',user, {withCredentials:true})
                .then(res => {
                    console.log('logIn token',res.data)
                    setLoading(false)
                })
            }
            else{
                axios.post('https://assignment-eleven-server-nu.vercel.app/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('logout',res.data)
                    setLoading(false)
                })
            }


            
        })
        return() =>{
            unsubscribe()
        }
     },[])
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;