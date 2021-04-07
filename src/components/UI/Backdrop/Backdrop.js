import React from 'react';
import myStyle from "./BackdropStyle";

const Backdrop = (props) => {
    const classes = myStyle()
    return ( 
        props.show ? 
        <div 
        className={classes.Backdrop}
        onClick={props.clicked}
        >
        </div> 
        : null
     );
}
 
export default Backdrop;