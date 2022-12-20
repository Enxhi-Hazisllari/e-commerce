import React from "react";
import { Button, Drawer, TextField, useMediaQuery } from "@mui/material";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards'
import { Box } from "@mui/system";

export default function Checkout() {

    const {showCheckout,setShowCheckout} = useUIContext()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');

    return (
        <Drawer 
        open={showCheckout}
        onClose={() => setShowCheckout(false)}
        anchor='right'

        PaperProps={{
            sx: {
                width : matches ? '100%' : 500,
                background : Colors.light_gray,
                borderRadius:0,
            }
        }}
        > 
        <Box 
        sx={{mt:2}}
        >
        <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
        />
        </Box>
       <Box 
            sx={{pd : 4 , mt :2 , mb:2}}
            display = 'flex'
            justifyContent={'center'}
            flexDirection= 'column'
            alignItems={'center'}
            >
            <TextField
            type="tel"
            name="number"
            val={number}
            placeholder={"Enter Number"}
            onChange={e => setNumber(e.target.value)}
            onFocus={e=>setFocus(e.target.name)}
            />
            <TextField
            type="tel"
            name="name"
            val={name}
            placeholder={"Enter Name"}
            onChange={e => setName(e.target.value)}
            onFocus={e=>setFocus(e.target.name)}
            />
            <TextField
            type="tel"
            name="expiry"
            val={expiry}
            placeholder={"Enter Expiry date"}
            onChange={e => setExpiry(e.target.value)}
            onFocus={e=>setFocus(e.target.name)}
            />
            <TextField
            type="tel"
            name="cvc"
            val={cvc}
            placeholder={"Enter Cvc"}
            onChange={e => setCvc(e.target.value)}
            onFocus={e=>setFocus(e.target.name)}
            />
        </Box>
        <Box
        display={'flex'}
        flexDirection='column'
        alignContent={'center'}
        alignItems={'center'}
        >
            <Button 
            variant='contained'
            
            sx={{
                width: '40%',
                mt: 3,   
            }}
            >
                Pay now</Button>
            <Button onClick={() => setShowCheckout(false)}>Cancel</Button>
        </Box>
        </Drawer>
    )
}