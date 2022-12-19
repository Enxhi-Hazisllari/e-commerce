import React from 'react';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";
import { firebasedb } from '../../services/firebase/db';
import Login from '../login';
import useDialogModel from '../../hooks/useDialogModel';

export default function Appbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [LoginDialog,showLoginDialog] = useDialogModel(Login)

    const handleLogin = () =>{
        showLoginDialog()
    }
    const handleLogout = async () =>{
        console.log("logout");
        try{
            await firebasedb.logout()
        }catch (error){
            console.log(error)
        }
    }
    return(
        <>
            {matches 
            ? (<AppbarMobile 
                onLoginClick={handleLogin}
                onLogoutClick={handleLogout}
                matches={matches}/>) 
            : (<AppbarDesktop
                onLoginClick={handleLogin}
                onLogoutClick={handleLogout}
            matches={matches}/>)}
            <LoginDialog/>
        </>
    );       
}
