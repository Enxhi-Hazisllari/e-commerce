import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez";
import { textPopUpTop } from "../../anmation";


//container
export const AppbarContainer = styled(Box)(() => 
({
    display : 'flex',
    marginTop:4,
    justifyContent:"center",
    alignItems : "center",
    padding : "2px 8px",

}))
//header
export const AppbarHeader = styled(Typography)(()=>({
    padding:'4px',
    flexGrow:1,
    fontSize: '4em',
    fontFamily:`"Montez" , "cursive"`,
    color:Colors.secondary,
    "&:hover": {
        animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
      },
}));

export const MyList = styled(List)(({type})=>({
    display:type === "row"? "flex" : "block" ,
    flexGrow:3,
    justifyContent: 'center',
    fontFamily:`"Montez" , "cursive"`,
    alignItems:"center"
}));

export const ActionIconsContainerMobile = styled(Box)(()=>({
    display : 'flex',
    background: Colors.shaft,
    alignItems: "center",
    position:"fixed",
    bottom: 0 ,
    left:0,
    width:"100%",
    zIndex: 99,
    borderTop:`1px solid ${Colors.border}`
}))
export const ActionIconsContainerDesktop = styled(Box)(()=>({
    flexGrow : 0
}))
export const DrawerCloseButton = styled(IconButton)(() => ({
    position : 'absolute',
    top : 10,
    left : '250px',
    zIndex : 1999
}))