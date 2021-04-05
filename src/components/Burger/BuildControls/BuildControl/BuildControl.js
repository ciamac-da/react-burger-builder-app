import React from "react";
import {Fab, Typography} from "@material-ui/core/";
import myStyles from "./BuildControlStyle";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const BuildControl = (props) => {

    const classes = myStyles();
  return (
    <div className={classes.BuildControl}>
      <Typography className={classes.LabelTypo}>{props.label} </Typography>
      <Fab 
      className={classes.More} 
      variant="contained" 
      onClick={props.removed}
      disabled={props.disabled}
      >
      <RemoveIcon />
      </Fab>
      <Fab 
      className={classes.Less} 
      variant="contained" 
      aria-label="add"
      onClick={props.added}
     // disabled={props.disabledMax}
      >
      <AddIcon />
      </Fab>
    </div>
  );
};

export default BuildControl;
