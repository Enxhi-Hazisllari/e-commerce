import React from 'react';
import Container from '@mui/material/Container';
import theme from './styles/theme';
import { ThemeProvider } from '@emotion/react';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './components/search';
import Cart from './components/cart';
import Title from './components/title/title';
import Checkout from './components/checkout';
import UserProvider from './context/user';
import { CssBaseline } from '@mui/material';


function App() {
  
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
     <Container maxWidth  = 'xl'>
      <UIProvider>
        <UserProvider>
        <Appbar/>
        <Banner/>
        <Promotions/>
        <Title/>
        <Products/>
        <Footer/>
        <AppDrawer/>
        <Cart/>
        <Checkout/>
        <SearchBox/>
        </UserProvider>
      </UIProvider>
     </Container>
    </ThemeProvider> 
  );
}

export default App;