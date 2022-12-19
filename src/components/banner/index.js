import React from "react";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";
import { Typography } from "@mui/material";

export default function Banner () {
    
    return (
        <BannerContainer>
            <BannerImage src="/images/banner/shop4.jpg"/>
            <BannerContent>
                <Typography variant = "h6" >Huge Collection</Typography>
                <BannerTitle variant = "h2"> new bags </BannerTitle>
                <BannerDescription variant="subtitles" > hello buy from us with the best price</BannerDescription>
                <BannerShopButton color="secondary">Shop now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
}