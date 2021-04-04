import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import Burger from '../Burger/Burger';
import BurgerControls from "../Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: {
                salad:  0,
                bacon:  0,
                cheese: 0,
                meat:   0,
            }
        };
    }
render(){
    return(
        <Aux>
            <Burger ingredients={this.state.ingredients} />
            <BurgerControls />
        </Aux>
    );
}
}

export default BurgerBuilder;