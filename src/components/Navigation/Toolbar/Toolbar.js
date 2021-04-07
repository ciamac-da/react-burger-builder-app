import React from 'react';
import myStyle from "./ToolbarStyle";
import {AppBar, Toolbar} from '@material-ui/core/';
import Navigation from "../Navigation";
const TheToolbar = (props) => {
    const classes = myStyle()
    return ( 
        
    <AppBar className={classes.Toolbar}>
    <Toolbar>
    <img className={classes.BurgerLogo} src="https://img.icons8.com/doodle/50/000000/hamburger.png"/>
    <nav className={classes.Nav}>
        <Navigation />
    </nav>
    </Toolbar>
    </AppBar> 
    );
}
 
export default TheToolbar;