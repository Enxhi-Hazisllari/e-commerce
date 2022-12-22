import { Button, Dialog, DialogContent, DialogTitle, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { firebasedb } from "../../services/firebase/db";

export default function Login({open,onClose}) {
    
    const[joinUs,setJoinUs]= useState(false)
    const [loading,setLoading] = useState(false)

    const[firstNameError, setfirstNameError]= useState('');
    const[lastNameError, setLastNameError]= useState('');
    const[emailError, setEmailError]= useState('');
    const[passwordError, setPasswordError]= useState('');

    const [form ,setForm] = useState({
        firstname: '',
        lastname : '',
        email : '',
        password: ''
    })

    const handleJoinUsSubmit = async (event) => {
        event.preventDefault();
        
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/; // Min 1 uppercase letter.Min 1 lowercase letter.Min 1 special character.Min 1 number.Min 8 characters.Max 30 characters.
        
        if(!form.firstname || !form.firstname.length){
            setfirstNameError("First Name is required")
            return false;
        }else{
            setfirstNameError("")
        }

        if(!form.lastname || !form.lastname.length){
            setLastNameError("Last Name is required")
            return false;
        }else{
            setLastNameError("")
        }

        if (!form.email || !form.email.length) {
            setEmailError("Email is required")
            return false;
        } else if(!regexEmail.test(form.email)){
            setEmailError("Email is not valid")
            return false;
        }else{
            setEmailError("")
        }

        if (!form.password || !form.password.length) {
            setPasswordError("Password is required")
            return false;
        } else if(!regexPassword.test(form.password)){
            setPasswordError("Password is not valid")
            return false;
        }else{
            setPasswordError("")
        }

        setLoading(true);
        try{
            await firebasedb.register({...form})
            onClose();
        } catch (error){
            console.log(error);
        }
        setLoading(false);

        return true;
    }

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/; // Min 1 uppercase letter.Min 1 lowercase letter.Min 1 special character.Min 1 number.Min 8 characters.Max 30 characters.
        
        if (!form.email || !form.email.length) {
            setEmailError("Email is required")
            return false;
        } else if(!regexEmail.test(form.email)){
            setEmailError("Email is not valid")
            return false;
        }else{
            setEmailError("")
        }

        if (!form.password || !form.password.length) {
            setPasswordError("Password is required")
            return false;
        } else if(!regexPassword.test(form.password)){
            setPasswordError("Password is not valid")
            return false;
        }else{
            setPasswordError("")
        }

        setLoading(true);
        try{
            await firebasedb.login({...form})
            onClose();
        } catch (error){
            console.log(error);
        }
        setLoading(false);

        return true;
    }

    const handleFormFieldUpdate = (value,field) =>{
        setForm ({...form,[field] : value})
    }

    return(
        <Dialog open={open}>
            <DialogTitle>
            <Box
                display = {'flex'}
                alignItems = {'center'}
                justifyContent = {'space-between'}
                >
                Login
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            </DialogTitle>
            <DialogContent>
                {
                    joinUs ? 
                    <Box display={'flex'} flexDirection='column'
                    sx={{width: '100%'}}>
                        <form onSubmit={handleJoinUsSubmit}>

                        <TextField
                        error={firstNameError && firstNameError.length ? true : false}
                        label={'First Name'}
                        variant = 'standard'
                        sx={{mb:2}}
                        fullWidth
                        value={form.firstname}
                        helperText={firstNameError} 
                        onChange={(event) => handleFormFieldUpdate(event.target.value , 'firstname')}
                        />
                        <TextField
                        error={lastNameError && lastNameError.length ? true : false}
                        label={'Last Name'}
                        variant = 'standard'
                        sx={{mb:2}}
                        fullWidth
                        value={form.lastname}
                        helperText={lastNameError}
                        onChange={(event) => handleFormFieldUpdate(event.target.value , 'lastname')}
                        />
                        <TextField
                        error={emailError && emailError.length ? true : false}
                        label={'Email'}
                        variant = 'standard'
                        sx={{mb:2}}
                        fullWidth
                        value={form.email}
                        helperText={emailError}
                        onChange={(event) => handleFormFieldUpdate(event.target.value , 'email')}
                        />
                        <TextField
                        error={passwordError && passwordError.length ? true : false}
                        label={'Password'}
                        type="password"
                        variant = 'standard'
                        sx={{mb:2}}
                        fullWidth
                        value={form.password}
                        helperText={passwordError}
                        onChange={(event) => handleFormFieldUpdate(event.target.value , 'password')}
                        />
                        <Button disabled={loading} fullWidth type = 'submit' variant="contained"> 
                        {loading ? "Please wait .." : "Sign up" }
                        </Button>
                        </form>

                        <Box sx={{mt:2 , textAlign:'center'}}>
                            <Typography variant="caption">
                                Already have an account ? {""}
                                <Button onClick={() => setJoinUs(false)}>Log in</Button>
                            </Typography>
                        </Box>
                    </Box> 
                    : (
                        <Box display={'flex'} flexDirection='column'
                            sx={{width: '100%'}}>
                            <form onSubmit={handleLoginSubmit}>    
                            <TextField
                            error={emailError && emailError.length ? true : false}
                            label={'Email'}
                            variant = 'standard'
                            sx={{mb:2}}
                            fullWidth
                            value={form.email}
                            helperText={emailError}
                            onChange={(event) => handleFormFieldUpdate(event.target.value , 'email')}
                            />
                            <TextField
                            error={passwordError && passwordError.length ? true : false}
                            label={'Password'}
                            type="password"
                            variant = 'standard'
                            sx={{mb:2}}
                            fullWidth
                            value={form.password}
                            helperText={passwordError}
                            onChange={(event) => handleFormFieldUpdate(event.target.value , 'password')}
                            />

                            <Button disabled={loading} fullWidth type = 'submit' variant="contained"> 
                            {loading ? "Please wait .." : "Log in" }
                            </Button>
                            </form>

                            <Box sx={{mt:2 , textAlign:'center'}}>
                                <Typography variant="caption">                                    
                                    Don't have an account ? {""}
                                    <Button onClick={() => setJoinUs(true)}>
                                        Sign up
                                    </Button>
                                </Typography>
                            </Box>
                        </Box>
                    )
                }
           
            </DialogContent>
        </Dialog>
    )
}