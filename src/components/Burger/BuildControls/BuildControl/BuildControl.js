import React from "react";
import Button from "@material-ui/core/Button";
import myStyles from "./BuildControlStyle";


const BuildControl = (props) => {

    const classes = myStyles();
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label} </div>
      <Button className={classes.More} variant="outlined" color="secondary">
        Less
      </Button>
      <Button className={classes.Less} variant="outlined" color="secondary">
        More
      </Button>
    </div>
  );
};

export default BuildControl;
