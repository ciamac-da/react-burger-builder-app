import React, { Component } from "react";
import Aux from "../../hoc/aux";
import Burger from "../Burger/Burger";
import BurgerControls from "../Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 1,
  bacon: 1.2,
  cheese: 0.8,
  meat: 2,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
     totalPrice:3,
    };
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice +priceAddition
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice })

  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls ingredientAdded={this.addIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
