import React from "react";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";
import { Typography } from "@mui/material";
import useDialogModel from "../../hooks/useDialogModel";
import { AllProducts } from "../allProducts";

export default function Banner ({product}) {
    
    const[AllProductDialog, showAllProductDialog]
    =useDialogModel(AllProducts, {product})

    return (
        <>
        <BannerContainer>
            <BannerImage src="/images/banner/cover.png"/>
            <BannerContent>
                <Typography variant= "h6">Your waiting time is over!</Typography>
                <BannerTitle variant= "h2">New Collection </BannerTitle>
                <BannerDescription variant= "subtitles">Hello buy from us with the best price</BannerDescription>
                <BannerShopButton color= "secondary" onClick={()=> showAllProductDialog()}>ALL PRODUCTS</BannerShopButton>
            </BannerContent>
        </BannerContainer>
        <AllProductDialog product={product}/>
        </>
    )
}