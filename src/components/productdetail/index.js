import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from "@mui/material";
import { Colors } from "../../styles/theme";
import CloseIcon from '@mui/icons-material/Close';
import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { Product, ProductImage } from "../../styles/Products";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import useCart from "../../hooks/useCart";

const SlideTransition = React.forwardRef((props, ref) =>(
    <Slide direction="down" {...props} ref={ref}/>
))
const ProductDetailWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    padding : theme.spacing(4)
}))
const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection : 'column',
    maxWidth : 500,
    lineheight: 1.5,
}))

export  function ProductDetail({open, onClose ,product}) {
    const theme = useTheme();
    const matches= useMediaQuery(theme.breakpoints.down('md'))

    const { addToCart, addToCartText } = useCart(product)
    // console.log(product);

    return (
        <Fragment>
        <Dialog
            TransitionComponent={SlideTransition}
            variant = 'permanent'
            open= {open}
            fullScreen
        >
            <DialogTitle sx = {{
                background: Colors.secondary
            }}>
                <Box
                display= {'flex'}
                alignItems ={'space-between'}
                justifyContent = {'center'}
                >
                    Product Title
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
                    <Product sx= {{ mr : 4}}>
                        <ProductImage src={product.image}/>
                    </Product>
                <ProductDetailInfoWrapper>
                    <Typography variant='subtitle1'>sku 123</Typography>
                    <Typography variant='subtitle1'>Availability: 10 in stock</Typography>
                    <Typography sx={{ lineHeight : 2}} variant='h4'>
                        {product.name}
                    </Typography>
                    <Typography variant='body'>
                        {product.description}
                        {product.description}
                    </Typography>
                    <Box 
                    sx= {{mt : 4}} display = 'flex' alignItems={'center'} justifyContent = 'space-between'>

                    <Button variant = 'contained' 
                        onClick={() => {
                        addToCart() 
                        onClose()}} >{addToCartText}</Button>
                    </Box>
                    <Box 
                    display = 'flex'
                    alignItems={'center'}
                    sx= {{mt : 4, color : Colors.light}}
                    >
                        <FavoriteIcon sx = {{mr : 2}} />
                        Add to wishlist
                    </Box>
                    <Box sx= {{
                        mt:4,
                        color:Colors.light
                    }}>
                        <FacebookIcon />
                        <TwitterIcon sx = {{pl : theme.spacing(4)}}/>
                        <InstagramIcon sx = {{pl : theme.spacing(4)}}/>
                    </Box>
                </ProductDetailInfoWrapper>

                </ProductDetailWrapper>

            </DialogContent>
        </Dialog>
        </Fragment>
    )
}