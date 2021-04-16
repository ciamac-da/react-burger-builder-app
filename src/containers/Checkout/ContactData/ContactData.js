import React, { Component } from "react";
import { Typography, TextField, Button } from "@material-ui/core/";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  orderHandler = (event) =>{
      event.preventDefault()
      const order = {
      ingredients: this.props.ingredients,
      price: this.state.price,
      costumer: {
        name: "",
        address: {
          street: "",
          zipCode: "",
          country: "",
        },
        email: "",
      },
      deliveryMethod:""
    };
    axios.post("/orders.json", order)
    .then(response=>{
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    }) 
  }
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
        <form  className={classes.root} noValidate autoComplete="off">
          <TextField
            id="name"
            name="name"
            label="Your Name"
            variant="filled"
            color="secondary"
            type="text"
            required
          />
          <TextField
            id="email"
            name="email"
            label="Your Email"
            variant="filled"
            color="secondary"
            required
          />
          <TextField
            id="street"
            name="street"
            label="Street"
            variant="filled"
            color="secondary"
            required
          />
          <TextField
            id="postal"
            name="postal"
            label="Postal Code"
            variant="filled"
            type="number"
            color="secondary"
            required
          />
          <div
          style={{position:"relative", top:"5px"}}
          >
            <Button
            type="submit"
            //color="secondary"
             style={{
              backgroundColor: "green",
              color:"white"
             }}
             variant="contained"
              onClick={this.orderHandler}
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
