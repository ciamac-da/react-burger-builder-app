import React from 'react';
import myStyle from "./BuildControlsStyle";
import BuildControl from './BuildControl/BuildControl';
import {Typography, Button} from "@material-ui/core";



const controls = [
    { label: "Salad" , type:"salad"  ,ingPrice:" : 1.5$"},
    { label: "Bacon" , type:"bacon"  ,ingPrice:" : 1.7$"},
    { label: "Cheese", type:"cheese" ,ingPrice:" : 1$"},
    { label: "Meat"  , type:"meat"   ,ingPrice:" : 2$"}
]
const BuildControls = (props) => {
    
    const classes = myStyle();

    return ( 
        <div className={classes.BuildControls}>
        <Typography className={classes.MyTypo}> Current Price : {props.price.toFixed(2)}$</Typography>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label + ctrl.ingPrice} 
            added={()=> props.ingredientAdded(ctrl.type)} 
            removed={()=> props.ingredientRemoved(ctrl.type)} 
            disabled={props.disabled[ctrl.type]}
          //  disabledMax={props.disabledMax[ctrl.type]}
            />
        ))}
        <Button 
        variant="contained" 
        className={classes.MyButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}
        >
        Order Now
        </Button>
        </div>

     );
}
 
export default BuildControls;