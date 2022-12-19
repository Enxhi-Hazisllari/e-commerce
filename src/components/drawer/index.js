import {  Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { lighten } from "polished";
import React from "react";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { DrawerCloseButton } from "../../styles/appbar";
import CloseIcon from '@mui/icons-material/Close';

const MiddleDivider = styled((props) => (
    <Divider  variant = "middle" {...props}/>
))``;

export default function AppDrawer() {

    const {drawerOpen,setDrawerOpen} = useUIContext();

    
    return (
        <>
        {drawerOpen && 
            <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon
                sx={{
                    fontsize: '2.5rem',
                    color: lighten(0.09, Colors.secondary)
                }}
                />
            </DrawerCloseButton>}
        <Drawer open = {drawerOpen}>  
            <List>
                <ListItemButton>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>Categories</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>Products</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>About Us</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>Contact Us</ListItemText>
                </ListItemButton>
            </List>
        </Drawer>
        </>
    )
}