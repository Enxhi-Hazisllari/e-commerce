import { Grid,Box, Typography, List, ListItemText, Button } from "@mui/material";
import React from "react";
import { SubscribeTf, FooterTitle } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import { Facebook,Twitter,Instagram } from "@mui/icons-material";
import { Stack } from "@mui/system";
import SendIcon from '@mui/icons-material/Send';

export default function Footer () {
    return (
        <Box
        sx = {{
            background : Colors.shaft,
            color:Colors.white,
            padding : {xs : 4 ,md : 10},
            pt: 12,
            pb: 12,
            fontSize:{xs : '12px',md : '14px'}
        }}
        >
            <Grid container spacing={2} justifyContent= 'center'>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant = "body1">About us</FooterTitle>
                    <Typography variant = "caption2">
                        Hello info about us , contact us and tell us what do you thing about our website.
                    </Typography>
                    <Box sx={{
                        mt : 4,
                        color: Colors.dove_gray
                    }}>
                        <Facebook sx={{mr: 1}}/>
                        <Twitter sx={{mr: 1}}/>
                        <Instagram sx={{mr: 1}}/>
                    </Box>

                </Grid>
                <Grid item md = {6} lg = {2}>
                    <FooterTitle variant = 'body1'> Information </FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant = 'caption2'>
                                About Us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant = 'caption2'>
                                Order Tracking
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant = 'caption2'>
                                Privacy &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant = 'caption2'>
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md = {6} lg = {2}>
                    <FooterTitle variant = 'body1'> My account </FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant = 'caption2'>
                                Log in
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant = 'caption2'>
                                My cart
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant = 'caption2'>
                                My account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant = 'caption2'>
                                Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant = 'body1'> NewsLetter </FooterTitle>
                    <Stack>
                    <SubscribeTf
                        color="primary"
                        label="Email address"
                        variant="standard"
                        />
                        <Button
                        startIcon={<SendIcon sx={{color: Colors.white}}/>}
                        sx={{mt:4 , mb:4}}
                        variant="contained">
                        Subscribe
                        </Button>
                    </Stack>
                </Grid> 
            </Grid>
        </Box>
    )
}