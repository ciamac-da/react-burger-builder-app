import React from 'react';
import Aux from '../../../hoc/aux';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core/';
import myStyle from "./OrderSummaryStyle";

const OrderSummary = (props) => {
   
    const classes = myStyle();
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <ListItem key={igKey}><span className={classes.mySpan}>{igKey}</span>: {props.ingredients[igKey]}</ListItem>
        )
    })
    return ( 
        <Aux>
        <Typography variant="h5">Your Order</Typography>
        <Typography >A delicious Burger with the following ingredients:</Typography>
        <List component="nav" aria-label="main mailbox folders">
        <ListItem>
        {ingredientSummary}
        </ListItem>
        </List>
        <Typography>Continue to checkout?</Typography>
        </Aux>
     );
}
 
export default OrderSummary ;