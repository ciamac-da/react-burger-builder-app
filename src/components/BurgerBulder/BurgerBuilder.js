import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../Burger/Burger";
import BurgerControls from "../Burger/BuildControls/BuildControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
  salad: 1.5,
  bacon: 1.7,
  cheese: 1,
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
      totalPrice: 3,
      purchaseable: false,
      purchasing: false,
    };
  }

  

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  purchasingCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchasingContinueHandler = () => {
   /*  const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      costumer: {
        name: "Cia",
        address: {
          street: "Earth",
          zipCode: "41678",
          country: "Italy",
        },
        email: "tjah@tjah.com",
      },
      deliveryMethod:"Fastest"
    };
    axios.post("/orders.json", order)
    .then(response=>{
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    }) */
 const queryParams = []
 for(let i in this.state.ingredients){
   queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
 }
 const queryString= queryParams.join('&')
    this.props.history.push({
      pathname:"/checkout",
      search:"?" + queryString
    })
  };

  render() {
    let disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    /*   let disabledMaxInfo = {
    ...this.state.ingredients
}

for (let keys in disabledMaxInfo){
    disabledInfo[keys] = disabledInfo[keys] > 20 
} */
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchasingCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchasingCancelHandler}
            purchaseContinued={this.purchasingContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          //disabledMax={disabledMaxInfo}
          price={this.state.totalPrice}
          ordered={this.purchasingHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
