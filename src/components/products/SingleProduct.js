import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import React from "react";
import { Stack } from "@mui/system";
import { Favorite, FitScreen } from "@mui/icons-material";
import ShareIcon from '@mui/icons-material/Share';
import useDialogModel from "../../hooks/useDialogModel";
import { ProductDetail } from "../productdetail";
import useCart from "../../hooks/useCart";

export default function SingleProduct({product,matches}){

    const [ProductDetailDialog, showProductDetailDialog]
    =useDialogModel(ProductDetail, { product })

    const {addToCart , addToCartText} = useCart(product)
    
    return (
        <>
        <Product>
            <ProductImage src={product.image} />
            <ProductMeta product={product} matches= {matches}/>
            <ProductActionsWrapper>
                <Stack direction={"row"}>
                    <ProductFavButton isFav={0}>
                        <Favorite/>
                    </ProductFavButton>
                    <ProductActionButton>
                        <ShareIcon color={"primary"}/>
                    </ProductActionButton>
                    <ProductActionButton onClick={()=> showProductDetailDialog()}>
                        <FitScreen color={"primary"}/>
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductAddToCart onClick={addToCart} variant = "contained"> {addToCartText}</ProductAddToCart>
        <ProductDetailDialog product = {product} />
        </>
        );
}