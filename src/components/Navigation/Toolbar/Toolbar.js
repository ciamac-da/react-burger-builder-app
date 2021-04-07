import React from 'react';
import myStyle from "./ToolbarStyle";
import {AppBar, Toolbar} from '@material-ui/core/';

const TheToolbar = (props) => {
    const classes = myStyle()
    return ( 
        
    <AppBar className={classes.Toolbar}>
    <Toolbar>
    <div>Menu</div>
    <div>Logo</div>
    <nav className={classes.Nav}>...</nav>
    </Toolbar>
    </AppBar> 
    );
}
 
export default TheToolbar;