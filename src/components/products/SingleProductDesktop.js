import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Favorite, FitScreen } from "@mui/icons-material";
import ShareIcon from '@mui/icons-material/Share';
import useDialogModel from "../../hooks/useDialogModel";
import { ProductDetail } from "../productdetail";
import useCart from "../../hooks/useCart";

export default function SingleProductDesktop({product,matches}){

    const [showOptions ,setShowOptions]=useState(false)

    const [ProductDetailDialog, showProductDetailDialog]
    =useDialogModel(ProductDetail, {product})

    const {addToCart, addToCartText } = useCart(product)

    const handleMouseEnter = () =>{
        setShowOptions(true)
    }
    const handleMouseLeave = () =>{
        setShowOptions(false)
    }
    return (
        <>  
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={product.image} />
            <ProductFavButton isFav={0}>
                <Favorite/>
            </ProductFavButton>

            {showOptions && 
            <ProductAddToCart onClick={addToCart}
            show= {showOptions} variant = "contained">
                {addToCartText}
            </ProductAddToCart>}
            <ProductActionsWrapper show = {showOptions}>
                <Stack direction={"column"}>
                    
                    <ProductActionButton>
                        <ShareIcon color={"primary"}/>
                    </ProductActionButton>
                    <ProductActionButton onClick={()=> showProductDetailDialog()}>
                        <FitScreen color={"primary"}/>
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductMeta product={product} matches= {matches}/>
        <ProductDetailDialog product = {product} />
        </>
        );
}