import React from "react";
import { Typography } from "@material-ui/core/";
import myStyle from "./OrderStyle";

const Order = (props) => {
  const classes = myStyle();
  const ingredients = [];
  for(let ingredientName in props.ingredients){
    ingredients.push({
      name: ingredientName, 
      amount:props.ingredients[ingredientName]
    })
  }

  const ingredientsOutput = ingredients.map(ig => {
    return <span
    style={{
      textTransform:"capitalize",
      display:"inline-block",
      margin:"0 8px",
      border:"1px solid #ccc",
      padding:"5px"
    }}
     key={ig.name}
     > {ig.name} ({ig.amount}) </span>
  })

  return (
      
    <div className={classes.order}>
      <Typography>Ingredients: {ingredientsOutput}</Typography>
      <Typography>
        Price:<strong>
     {/*   {Number.parseFloat(props.price.toFixed(2))}  */}
        $</strong>{" "}
      </Typography>
    </div>
  );
};

export default Order;
