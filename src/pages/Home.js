import React from 'react'
import {Typography,Avatar,Grid,Box} from '@material-ui/core'
import avatar from '../images/avatar.png'
import Typed from "react-typed"
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme=>({
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        margin:theme.spacing(1)
    },
    title:{
        color:'tomato'
    },
    Subtitle:{
        color:"tan",
    }
}))

function Home() {

    const classes = useStyles()
    return (
        <Box>
           <Avatar className={classes.avatar} src={avatar} alt="Robert Obiri Jnr"/>
           <Typography variant="h4" className={classes.title}>
                <Typed strings={["Robert Obiri"]} typeSpeed={40}/>
           </Typography>
           <Typography variant="h5" className={classes.Subtitle}>
               <Typed strings={["Web Developer","MERN Stack","MEVN Stack"]} 
               typeSpeed={40}
               backSpeed={60}
               loop
               />
            </Typography>
        </Box>
    )
}

export default Home
