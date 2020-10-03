import React,{useState} from "react";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    List,

    Typography,
    Box,
} from "@material-ui/core";
import {
    Home,
    AssignmentInd,
    Apps,
    ContactMail
} from "@material-ui/icons";
import avatar from '../images/avatar.png'
import { makeStyles} from '@material-ui/core/styles';
import MobileRightDrawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu';



const menuItems =[
    {
        listIcon:<Home/>,
        listText:"Home"
    },
    {
        listIcon:<AssignmentInd/>,
        listText:"Resume"
    },
    {
        listIcon:<Apps/>,
        listText:"Portfolio"
    },
    {
        listIcon:<ContactMail/>,
        listText:"Contact"
    }
]

const useStyles = makeStyles(theme=>({
    menustyle:{
        width:250,
        background:'#511',
        height:'100%'
    },
    avatar:{
        display:'block',
        margin:'0.5rem auto',
        width:theme.spacing(13),
        height:theme.spacing(13)
    },
    listIconColor:{
        color:'tan'
    }
}))

function Navbar() {
    const  classes = useStyles();
    const [state, setState] = useState({
        right:false
    })

    const toggleSlider = (slider,open) =>()=>{
        setState({...state,[slider]:open})
    }

    const sideDrawer = slider =>(
        <Box 
        className={classes.menustyle}
         component='div'
         onClick={toggleSlider(slider,false)}
         > 

        <Avatar className={classes.avatar} src={avatar} alt="Robert Obiri Jnr"/>
        <Divider/>
        <List> 
       { menuItems.map((listItem,key)=>(
            <ListItem button key={key}>
            <ListItemIcon className={classes.listIconColor} >
                {listItem.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listIconColor} primary={listItem.listText}/>
        </ListItem>
       ))}
           
        </List>
        </Box>
    );
    return (
        <>
       
        <Box container="nav">
            <AppBar position="static" style={{background:'#222'}}>
                <Toolbar >
                    <IconButton onClick={toggleSlider("right",true)}>
                    <MenuIcon style={{color:'tomato'}} />
                    </IconButton>  
                    <Typography variant='h5' style={{color:'tan'}}>Portfolio</Typography>
                    <MobileRightDrawer
                    anchor="right"
                    open={state.right}
                    onClose={toggleSlider("right",false)}
                    >
                        {sideDrawer("right")}
                    </MobileRightDrawer>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
}

export default Navbar;