import React from 'react';
import Navigation from '../Navigation';
import myStyle from "./SideDrawerStyle"

const SideDrawer = () => {
    
    const classes = myStyle()

    return ( 
    <div className={classes.SideDrawer}>
    <img  src="https://img.icons8.com/doodle/50/000000/hamburger.png"/>
    <nav>
    <Navigation />
    </nav>
    </div> );
}
 
export default SideDrawer;