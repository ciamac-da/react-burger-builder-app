import React from 'react';
import myStyle from "./BuildControlsStyle";
import BuildControl from './BuildControl/BuildControl';
import {Typography} from "@material-ui/core";



const controls = [
    { label: "Salad", type:"salad"},
    { label: "Bacon", type:"bacon"},
    { label: "Cheese", type:"cheese"},
    { label: "Meat", type:"meat"}
]
const BuildControls = (props) => {
    
    const classes = myStyle();

    return ( 
        <div className={classes.BuildControls}>
        <Typography> Current Price: {props.price.toFixed(2)}</Typography>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={()=> props.ingredientAdded(ctrl.type)} 
            removed={()=> props.ingredientRemoved(ctrl.type)} 
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        </div>
     );
}
 
export default BuildControls;