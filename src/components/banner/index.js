import React from "react";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";
import { Typography } from "@mui/material";

export default function Banner () {
    
    return (
        <BannerContainer>
            <BannerImage src="/images/banner/cover.png"/>
            <BannerContent>
                <Typography variant = "h6" >Your waiting time is over!</Typography>
                <BannerTitle variant = "h2"> New Collection </BannerTitle>
                <BannerDescription variant="subtitles" > Hello buy from us with the best price</BannerDescription>
                <BannerShopButton color="secondary">Shop now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
}