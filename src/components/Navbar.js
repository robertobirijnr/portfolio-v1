import React from "react";
import {
    AppBar,
    Toolbar,
    // ListItems,
    IconButton,
    // ListItemText,
    Avatar,
    Divider,
    // List,
    Typography,
    Box,
} from "@material-ui/core";
import {
    ArrowBack,
    // Home,
    // AssignmentInd,
    // Apps,
    // ContactMail
} from "@material-ui/icons";
import avatar from '../images/avatar.png'
import { makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles(theme=>({
    menustyle:{
        width:250,
        background:'#511',
        height:'30rem'
    },
    avatar:{
        display:'block',
        margin:'0.5rem auto',
        width:theme.spacing(13),
        height:theme.spacing(13)
    }
}))

function Navbar() {
    const  classes = useStyles();
    return (
        <>
        <Box className={classes.menustyle} component='div'> 
        <Avatar className={classes.avatar} src={avatar} alt="Robert Obiri Jnr"/>
        <Divider/>
        </Box>
        <Box container="nav">
            <AppBar position="static" style={{background:'#222'}}>
                <Toolbar >
                    <IconButton>
                    <ArrowBack style={{color:'tomato'}} />
                    </IconButton>  
                    <Typography variant='h5' style={{color:'tan'}}>Portfolio</Typography>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
}

export default Navbar;