import React from 'react';
import myStyle from './ModalStyle';

const Modal = (props) => {
    const classes = myStyle()
    return ( 
        <div className={classes.Modal}>
        {props.children}
        </div>
     );
}
 
export default Modal;