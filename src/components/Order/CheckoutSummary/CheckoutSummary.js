import React from 'react';
import Burger from '../../Burger/Burger';
import { Typography, Button } from '@material-ui/core/';


const CheckoutSummary = (props) => {
    return ( 
        <div>
            <Typography>We hope it tastes well.</Typography>
            <div>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button>Cancel</Button>
            <Button>Continue</Button>
        </div>
     );
}
 
export default CheckoutSummary ;