import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Colors } from "../../styles/theme";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import {clamp} from "./clamp";
import useCart from "../../hooks/useCart";

export default function IncDec({product}){

    const clampV = clamp(1,10);
    const [amount,setAmount] = useState(product.amount);
    const {cart,setCart} = useCart(product);

    const handleDecrement = () =>{
        const newAmount = clampV(amount - 1)

        const productIndex = cart.findIndex(c => c.id === product.id)

        const newProduct = { ...cart[productIndex], amount: newAmount }
        
        const updatedCart = [
            ...cart.slice(0, productIndex),
            newProduct,
            ...cart.slice(productIndex + 1)
        ]
        
        setCart(updatedCart)
        setAmount(newAmount)
    }
    const handleIncrement = () =>{
        const newAmount = clampV(amount + 1)

        const productIndex = cart.findIndex(c => c.id === product.id)
        // console.log(productIndex);
        // console.log(cart);
        const newProduct = { ...cart[productIndex], amount: newAmount }

        const updatedCart = [
            ...cart.slice(0, productIndex),
            newProduct,
            ...cart.slice(productIndex + 1)
        ]
        
        setCart(updatedCart)
        setAmount(newAmount)
    }

    return(
        <Box display={'flex'}>
            <IconButton
            sx={{
                borderRadius: 0,
                background:`${Colors.secondary}`
            }}
            onClick={()=> handleDecrement() }>
            <RemoveIcon/>
            </IconButton>
            <Typography
            variant="h6"
            sx={{border: `1px solid ${Colors.secondary}`,p: 1.5}}>
                {amount}
            </Typography>
            <IconButton
            sx={{
                borderRadius: 0,
                background:`${Colors.secondary}`
            }}
            onClick={()=> handleIncrement() }>
            <AddIcon/>
            </IconButton>
        </Box>
    )
}