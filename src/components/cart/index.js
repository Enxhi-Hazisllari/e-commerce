import React from "react";
import { Avatar, Button, Divider, Drawer, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";
import { Box } from "@mui/system";
import useCart from "../../hooks/useCart";
import IncDec from "../ui";


export default function Cart(product) {

    const {cart,setShowCart,showCart,price,setShowCheckout} = useUIContext();
    const theme = useTheme();
    const matches = useMediaQuery (theme.breakpoints.down('md'));
    
    const { removeFromCart,removeAllCart} = useCart(product)


    const cartContent = 
    cart.map ( item => (
        <Box key = {item.id}>
            <Box 
                display={'flex'}
                sx= {{pt : 2 , pb: 2}}
                alignItems = 'start'
                justifyContent={'space-between'}>
                <Avatar src= {item.image} sx = {{width : 96 , height : 96 , mr:2}} />
                <Box display="flex" flexDirection={'column'}>
                <Typography variant = "h6" > {item.name}</Typography>
                {!matches && <Typography variant = "subtitles"> {item.description}</Typography>}
                </Box>
                <Typography variant = "body2" justifyContent={'end'}> 
                $ {item.price}
                </Typography>
            </Box>
                {matches && <Typography variant = "subtitles"> {item.description}</Typography>}
                <Box
                display = 'flex'
                justifyContent={'space-around'}
                sx={{p:2}}
                >
                    <IncDec product = {item} />
                    <Button 
                    variant = "outlined"
                    sx= {{mb:1}} 
                    onClick={() => removeFromCart(item.id)}
                    > Remove from cart</Button>
                </Box>
                <Divider variant="inset" />
        </Box>
    ))
    
    return (
        <Drawer
        onClose={() => setShowCart(false)}
        open = {showCart}
        anchor="right"
        PaperProps={{
            sx : {
                width: matches ? '100%' : 500,
                background: Colors.light_gray,
                borderRadius : 0

            }
        }}
        >
            {cart.length > 0 
            ? <Box 
            sx={{pd : 4 }}
            display = 'flex'
            justifyContent={'center'}
            flexDirection= 'column'
            alignItems={'center'}
            >
                <Typography variant= 'h3' color = {Colors.black}>
                    Your Cart
                </Typography>
                <Typography variant= 'body' color = {Colors.muted}>
                    SOME text some text some text
                </Typography>

                <Paper
                    elevation={0}
                    sx = {{
                        mt:2,
                        width : '90%',
                        padding : 4,
                    }}
                >

             {cartContent}
                </Paper>
                <Button 
                    sx= {{mt:1 , mb:0}} 
                    onClick={() => removeAllCart()}
                    > Clear cart</Button>
                <Button sx = {{mt : 1}} variant = "contained" onClick = {() => setShowCheckout(true)}>
                    Proceed to payment
                </Button>
        
                <Typography variant= 'body' color = {Colors.black}>
                    Total amount : ${price}
                </Typography>
            </Box> 
            : <Box
            sx = {{
                p : 4,
            }}
            display = 'flex'
            justifyContent={'center'}
            flexDirection = 'column'
            alignItems={'center'}
            >
                <Typography variant= {matches ? "h6" : "h5"} color = {Colors.black}>
                Your cart is empty
                </Typography>
            </Box>}
            <Button onClick={() => setShowCart(false)}>Close</Button>
            
        </Drawer>
    )
}