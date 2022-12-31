import React from "react";
import { Button, Drawer, useMediaQuery } from "@mui/material";
import { Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";
import { useTheme } from "@emotion/react";
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards'
import { Box } from "@mui/system";
import useForm from "../../hooks/useValidateCard";

export default function Checkout() {

    const {showCheckout,setShowCheckout} = useUIContext();
    const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Drawer 
        open={showCheckout}
        onClose={() => setShowCheckout(false)}
        anchor='right'

        PaperProps={{
            sx: {
                width : matches ? '100%' : 500,
                background : Colors.light_gray,
                borderRadius:0,
            }
        }}
        > 
        <Box sx={{mt:2}}>

        <Cards
            cvc={values.cardSecurityCode}
            expiry={values.cardExpiration}
            focused={values.focus}
            name={values.cardName}
            number={values.cardNumber}
        />
        
        </Box>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', padding: 4, margin: 2}}>
            <Form onSubmit={handleSubmit} style={{justifyContent:'center', alignItems:'center', padding: 4, margin: 2, width:'80%'}}>

                    <Form.Group style={{padding: 4, margin: 1}}>
                        <Form.Control style={{padding: 10,}}
                            type="number"
                            id="cardNumber"
                            data-testid="cardNumber"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={values.cardNumber}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            isValid={errors.cnumber}
                        />
                    </Form.Group>

                    <Form.Group style={{padding: 4, margin: 1}}>
                        <Form.Control
                            style={{padding: 10,}}
                            type="text"
                            id="cardName"
                            data-testid="cardName"
                            name="cardName"
                            placeholder="Card Holder Name"
                            value={values.cardName}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            isValid={errors.cname}
                        />
                    </Form.Group>

                    <Form.Group style={{padding: 4, margin: 1}}>
                        <Form.Control
                            style={{padding: 10,}}
                            type="text"
                            id="cardExpiration"
                            data-testid="cardExpiration"
                            name="cardExpiration"
                            placeholder="Expiration Date"
                            value={values.cardExpiration}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            isValid={errors.cexp}
                        />
                    </Form.Group>

                    <Form.Group style={{padding: 4, margin: 1}}>
                        <Form.Control
                            style={{padding: 10,}}
                            type="number"
                            id="cardSecurityCode"
                            data-testid="cardSecurityCode"
                            name="cardSecurityCode"
                            placeholder="Security Code"
                            value={values.cardSecurityCode}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            isValid={errors.ccvv}
                        />
                    </Form.Group>

                    <Alert 
                        style={{margin: 10,}}
                        id="alertMessage"
                        data-testid="alertMessage"
                        variant={errors.variant}
                        show={errors.show}
                        >
                        {errors.message}
                    </Alert>{" "}

                    <Box
                    display={'flex'}
                    flexDirection='column'
                    alignContent={'center'}
                    alignItems={'center'}
                    >
                    <Button variant='contained'sx={{width: '40%', mt: 3}} data-testid="validateButton" id="validateButton"type="submit"
                    >Pay now</Button>

                    <Button onClick={() => setShowCheckout(false)}>Cancel</Button>
                    </Box>
            </Form>
        </div>
        </Drawer>
    )
}