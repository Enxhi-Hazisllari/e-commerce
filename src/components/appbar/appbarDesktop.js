import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from './actions';
import { useUIContext } from '../../context/ui';

export default function AppbarDesktop({matches, onLoginClick , onLogoutClick}) {
    const { setShowSearchBox} = useUIContext();

    return (
        <AppbarContainer>
        <AppbarHeader>my Store</AppbarHeader>
        <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        </MyList>
        <ListItemButton onClick = {() => setShowSearchBox(true)}>
            <ListItemIcon >
                <SearchIcon />
            </ListItemIcon>
        </ListItemButton>
        <Actions onLogin={onLoginClick}
            onLogout={onLogoutClick}
            matches = {matches}/>
        </AppbarContainer>
    )
}