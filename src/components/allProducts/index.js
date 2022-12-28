import { Box, Dialog, DialogContent, DialogTitle, Grid, IconButton, Slide, Typography, useMediaQuery } from "@mui/material";
import React, { Fragment } from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Colors } from "../../styles/theme";
import CloseIcon from '@mui/icons-material/Close';
import { AllProductImage } from "../../styles/Products";
import { products } from "../../data";

const SlideTransition = React.forwardRef((props, ref)=>(
    <Slide direction="down" {...props} ref={ref} />
));
const AllProductDetailWrapper = styled(Box)(({theme}) =>({
    display: 'flex',
    padding: theme.spacing(4)
}));
const AllProductDetailInfoWrapper = styled(Box)(() =>({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5
}));

export function AllProducts({open, onClose}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const renderAllProducts = products.map( product =>{
        return(
        <Fragment key={product.id}>
        <Grid item={true} 
        xs = {4}
        sm = {4}
        md = {3}
        display = {'flex'} flexDirection={'row'}
        alignItems= {"center"}>
        <DialogContent>
        <AllProductDetailWrapper flexDirection={matches ? 'row' : 'column'}>
        <AllProductDetailInfoWrapper>
            <AllProductImage src={product.image}/>
            <Typography fontSize = {matches ?  15 : 12 } >
                {product.name}
            </Typography>
            <Typography fontSize = {matches ?  15 : 12 } justifyContent={'center'} sx={{pt: 1}}>Price: {product.price} USD</Typography>
        </AllProductDetailInfoWrapper>
        </AllProductDetailWrapper>
        </DialogContent>
        </Grid>
        </Fragment>
        )
    })

    return(
        <Dialog
        TransitionComponent={SlideTransition}
        variant = 'permanent'
        open= {open}
        fullScreen>
            <DialogTitle sx={{background: Colors.secondary}}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    ALL PRODUCTS
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <Grid
            container
            spacing = {{xs: 2, md: 3}}
            justifyContent={'center'}
            sx = {{ margin: "20px 4px 10px 4px" }}
            columns = {{xs: 4, sm: 8, md: 12}}>
            {renderAllProducts}
            </Grid>
        </Dialog>
    )
}