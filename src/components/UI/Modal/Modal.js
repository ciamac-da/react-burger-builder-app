import React from 'react';
import myStyle from './ModalStyle';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    const classes = myStyle()
    return ( 
        <Aux>
        <Backdrop 
        show={props.show} 
        clicked={props.modalClosed}
        />
        <div 
        className={classes.Modal}
        style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0",
            transition: props.show ? "1s" : "0",
        }}
        >
        {props.children}
        </div>
        </Aux>
     );
}
 
export default Modal;