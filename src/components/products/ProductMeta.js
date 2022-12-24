import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/Products";
import React from "react";

export default function ProductMeta({product,matches}){

    return (
        <ProductMetaWrapper>
            <Typography variant={matches? "h6" : "h5"} lineHeight= {2}>
            {product.name}
            </Typography>
            <Typography variant={"body1"} >
            {product.price} USD
            </Typography>
        </ProductMetaWrapper>
    )
}