import React from "react";
import { Typography, TextField, Button } from "@material-ui/core/";
import myStyle from "./OrderStyle";

const Order = () => {
  const classes = myStyle();
  return (
    <div className={classes.order}>
      <Typography>Ingredients:</Typography>
      <Typography>
        Price:<strong>$</strong>{" "}
      </Typography>
    </div>
  );
};

export default Order;
