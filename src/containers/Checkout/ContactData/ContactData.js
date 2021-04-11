import React, { Component } from "react";
import { Typography, TextField, Button } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };
  render() {
    const classes = this.props;
    return (
      <div
        style={{
          margin: "20px auto",
          backgroundColor:"#ff9800",
          width: "80%",
          borderRadius:"10px",
          boxShadow: "0 2px 3px #ccc",
          border: "1px solid #ff9800 ",
          padding: "13px",
          boxSizing: "border-box",
          textAlign: "center",
          color: "#111 ",
          marginBottom: "40px !important",
        }}
      >
        <Typography style={{ margin: "4px" }} variant="h5">
          Enter your Contact data
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="name"
            name="name"
            label="Your Name"
            variant="filled"
            color="secondary"
          />
          <TextField
            id="email"
            name="email"
            label="Your Email"
            variant="filled"
            color="secondary"
          />
          <TextField
            id="street"
            name="street"
            label="Street"
            variant="filled"
            color="secondary"
          />
          <TextField
            id="postal"
            name="postal"
            label="Postal Code"
            variant="filled"
            color="secondary"
          />
          <div
          style={{position:"relative", top:"5px"}}
          >
            <Button
            //color="secondary"
             style={{
              backgroundColor: "green",
              color:"white"
             }}
             variant="contained"
              onClick={this.props.checkoutContinued}
            >
              Order
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactData;
