import { useTheme } from '@emotion/react';
import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { AppbarHeader } from '../../styles/appbar';
import { Colors } from '../../styles/theme';

const Title = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  
  return (
    <Box 
      color = {Colors.primary}
      width= '100%'
      display={"flex"} 
      justifyContent={"center"} 
      sx = {{padding : 4 }} 
      fontSize = {matches ?  10 : 15 }
      alignItems='center'>
        <AppbarHeader>OUR PRODUCTS</AppbarHeader>
    </Box>
  )
}

export default Title;