import React, { Fragment, useState } from "react";
import { Avatar, Box, Divider, IconButton, Paper, Slide, Typography } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { SearchBoxContainer, SearchField } from "../../styles/search";
import CloseIcon from "@mui/icons-material/Close";
import { products } from "../../data";
import {ProductDetail} from '../productdetail/index';
import useDialogModel from "../../hooks/useDialogModel";

export default function SearchBox() {

    const {showSearchBox, setShowSearchBox} = useUIContext();

    const [product, setProduct] = useState(null);

    const [ProductDetailDialog, showProductDetailDialog] = useDialogModel(ProductDetail, {product});

    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm, product) => {
        setValue(searchTerm);
        setProduct(product);
        showProductDetailDialog();
    };

    const searchContent = products.filter(product => {
        const searchTerm = value.toLowerCase();
        const fullName = product.name.toLowerCase();
        return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
        
    }).map((product) => (
        <Fragment key={product.id}>
            <Box>
                <Box 
                    onClick={() => {
                        onSearch(product.name, product);
                        setShowSearchBox(false);
                    }} 
                    display="flex"
                    sx={{pt: 2, pb: 2}}
                    alignItems="start"
                >
                    <Avatar src={product.image} sx={{width: 96, height: 96, mr: 2}} />
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6">{product.name}</Typography>
                        <Typography variant="subtitle1">{product.description}</Typography>
                        <Typography variant="h6" alignItems="center" sx={{pt: 2}}>Price: {product.price} USD</Typography>
                    </Box>
                </Box>
                <Divider variant="middle" />
            </Box>
        </Fragment>
    ));

    return(
        <Fragment>
            <Slide direction="down" in={showSearchBox} timeout={500}>
                <SearchBoxContainer>
                    <SearchField color="secondary" variant="standard" fullWidth placeholder="Search..." value={value} onChange={onChange} />
                     <IconButton onClick={()=> setShowSearchBox(false)}>
                         <CloseIcon sx= {{fontSize: '2rem'}} color='secondary' />
                     </IconButton>
                     <Paper>
                         {searchContent}
                     </Paper>
                 </SearchBoxContainer>
             </Slide>
             {ProductDetailDialog && <ProductDetailDialog product={product}/>}
         </Fragment>
     );
 };

