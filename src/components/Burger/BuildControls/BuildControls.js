import React from 'react';
import myStyle from "./BuildControlsStyle";
import BuildControl from './BuildControl/BuildControl';

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
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
        </div>
     );
}
 
export default BuildControls;