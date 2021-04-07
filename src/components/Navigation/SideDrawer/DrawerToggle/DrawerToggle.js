import React from 'react';
import { Typography } from '@material-ui/core';
import myStyle from "./DrawerToggleStyle";

const DrawerToggle = (props) => {
    const classes =myStyle();
    return ( 
        <div className={classes.Menu} onClick={props.clicked}>
        <img className={classes.Logo} src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png"/>
           <Typography className={classes.MenuTypo}>Menu</Typography>
        </div>
     );
}
 
export default DrawerToggle;