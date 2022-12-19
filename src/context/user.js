import { useContext } from "react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../services/firebase/db";

const UserContext = createContext();

export default function UserProvider ({children})  {
    const [session,setSession] = useState({
        user:null
    });
    useEffect (()=> {

        const unSubFromFbStateChange = auth.onAuthStateChanged(user => {
            setSession({user});
        });
        return() => unSubFromFbStateChange();
    },[])

    return (
        <UserContext.Provider value = {session}> {children} </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)