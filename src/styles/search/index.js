import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from '../theme';

export const SearchBoxContainer = styled(Box)(({theme}) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    background: Colors.primary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1500,
    opacity: 0.9, 
}));

export const SearchField = styled(TextField)(({theme})=>({
    ".MuiInputLabel-root": {
        color: Colors.secondary
    },
    ".MuiInput-root": {
        fontSize: '1rem',
        [theme.breakpoints.up('md')] : {
            fontSize: '2rem',
        },
        color: Colors.secondary
    },
    ".MuiInput-root::before": {
        borderBottom: `1px solid ${Colors.secondary}`
    },
    padding: '0 0 0 40px'
}));