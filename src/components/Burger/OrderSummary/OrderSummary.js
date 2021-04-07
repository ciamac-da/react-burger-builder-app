import React from 'react';
import Aux from '../../../hoc/aux';
import { Typography, List, ListItem, Button } from '@material-ui/core/';
import myStyle from "./OrderSummaryStyle";

const OrderSummary = (props) => {
   
    const classes = myStyle();
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <ListItem className={classes.List} key={igKey}><span className={classes.Span}>{igKey}</span>: {props.ingredients[igKey]}</ListItem>
        )
    })
    return ( 
        <Aux>
        <Typography className={classes.H5} variant="h5">
        Your Order
        <img className={classes.BurgerLogo} src="https://img.icons8.com/doodle/32/000000/hamburger.png"/>
        </Typography>
        <Typography className={classes.Subscribe} >A delicious Burger with the following ingredients:</Typography>
        <List>
        <ListItem className={classes.Ul} >
        {ingredientSummary}
        </ListItem>
        </List>
        <Typography className={classes.ContinueTypo}>Continue to checkout?</Typography>
        <div className={classes.BtnDiv}>
        <Button onClick={props.purchaseCancelled} className={classes.CancelButton}>&nbsp;&nbsp;Cancel&nbsp;&nbsp;</Button>
        <Button onClick={props.purchaseContinued} className={classes.ContinueButton}>Continue</Button>
        </div>
        </Aux>
     );
}
 
export default OrderSummary ;