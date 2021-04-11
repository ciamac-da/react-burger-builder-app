import React from 'react';
import Burger from '../../Burger/Burger';
import { Typography, Button } from '@material-ui/core/';
import myStyle from "./CheckoutSummaryStyle";


const CheckoutSummary = (props) => {
    const classes = myStyle()
    return ( 
        <div className={classes.checkoutSummary}>
            <Typography className={classes.typo}>We hope it tastes well.</Typography>
            <div>
                <Burger ingredients={props.ingredients} />
            </div>
        <div className={classes.btnDiv}>
            <Button onClick={props.checkoutCancelled} className={classes.cancelButton}>&nbsp;&nbsp;Cancel&nbsp;&nbsp;</Button>
            <Button onClick={props.checkoutContinued} className={classes.continueButton}>Continue</Button>
        </div>
        </div>
     );
}
 
export default CheckoutSummary ;