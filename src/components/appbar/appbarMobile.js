import { CssBaseline, IconButton } from '@mui/material';
import React from 'react';
import { AppbarContainer, AppbarHeader } from '../../styles/appbar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import Actions from './actions';
import {  useUIContext } from '../../context/ui';


export default function AppbarMobile({matches , onLoginClick , onLogoutClick}){

    const {setDrawerOpen , setShowSearchBox} = useUIContext()
    return (
        <AppbarContainer>
        <CssBaseline />
            <IconButton onClick={()=> setDrawerOpen(true)}>
                <MenuIcon/>
            </IconButton>
            <AppbarHeader textAlign = 'center' variant = 'h4'>
                My Store
            </AppbarHeader>
            <IconButton onClick = {( ) =>setShowSearchBox(true) }>
                <SearchIcon />
            </IconButton>
            <Actions onLogin={onLoginClick}
            onLogout={onLogoutClick}
            matches = {matches}/>
        </AppbarContainer>
    )
}