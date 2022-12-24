import React from "react";
import { Avatar, Button, Divider, Drawer, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentIcon from '@mui/icons-material/Payment';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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
            sx= {{pt: 2, pb: 2}}
            alignItems = 'start'
            >
                {!matches && <Avatar src= {item.image} sx = {{width : 96 , height : 96 , mr:2}} />}

                <Box display="flex" flexDirection={'column'}>
                    {!matches &&<Typography variant = "h6" > {item.name}</Typography>}
                    {!matches && <Typography variant = "subtitles"> {item.description}</Typography>}
                    {!matches && <Typography variant = "h6" justifyContent={'center'} sx={{pt: 2}}>Price: {item.price} USD</Typography>}
                </Box>
            </Box>

            <Box
            display={'flex'}
            alignItems = 'start'
            justifyContent={'space-between'}>

                <Box display="flex" flexDirection={'column'}>
                    {matches &&<Avatar src= {item.image} sx = {{width : 96, height : 96, mr:2}} />}
                    {matches &&<Typography variant = "h6" > {item.name}</Typography>}
                    {matches && <Typography variant = "subtitles"> {item.description}</Typography>}
                    {matches && <Typography variant = "h6" justifyContent={'center'} sx={{pt: 2}}>Price: {item.price} USD</Typography>}
                </Box>                
            </Box>

                <Box
                display = 'flex'
                justifyContent={'space-around'}
                sx={{p: 2}}
                >
                    <IncDec product = {item} />
                    <Button 
                    variant = "outlined"
                    sx= {{p: 1.5}} 
                    startIcon={<DeleteIcon />}
                    onClick={() => removeFromCart(item.id)}
                    >REMOVE</Button>
                </Box>

                <Divider variant="middle" />
        </Box>
    ))
    
    return (
        <Drawer
        onClose={() => setShowCart(false)}
        open = {showCart}
        anchor="right"
        PaperProps={{
            sx : {width: matches ? '100%' : 500, background: Colors.light_gray, borderRadius: 0}
        }}
        >
            {cart.length > 0 
            ? 
            <Box 
            sx={{pd: 4 }}
            display = 'flex'
            justifyContent={'center'}
            flexDirection= 'column'
            alignItems={'center'}
            >
                <Typography variant= 'h3' color = {Colors.primary}>
                    Your Cart
                </Typography>
                <Typography variant= 'body' color = {Colors.black}>
                    THESE ARE THE PRODUCTS YOU CHOOSE
                </Typography>

                <Paper
                    elevation={0}
                    sx = {{mt:2, width: '90%', padding: 4,}}
                >
                {cartContent}
                </Paper>
                <Typography sx={{mt: 2, mb: 1}} variant= 'h6' color= {Colors.black}>
                    Total amount: {price} USD
                </Typography>
                <Button sx= {{mt: 1}} variant= {"contained"} startIcon= {<PaymentIcon />} onClick= {() => setShowCheckout(true)}>
                    Proceed to payment
                </Button>
                <Button sx= {{mt: 1, mb: 0}} variant={'outlined'} startIcon= {<DeleteIcon />} onClick={() => removeAllCart()}> 
                    Clear cart</Button>
            </Box> 
            : 
            <Box
            sx = {{p: 2,}}
            display = {'flex'}
            justifyContent={'center'}
            flexDirection = 'column'
            alignItems={'center'}
            >
                <Typography variant= {matches ? "h4" : "h3"} color= {Colors.primary}>
                    Your cart is empty
                </Typography>
                <Box
                sx = {{p: 4,}}
                display = {'flex'}
                justifyContent={'center'}>
                    <AddShoppingCartIcon fontSize="large"/>
                </Box>                    
            </Box>}
            <Button sx={{mt: 2, mb: 1}} onClick={() => setShowCart(false)}>Close</Button>
            
        </Drawer>
    )
}