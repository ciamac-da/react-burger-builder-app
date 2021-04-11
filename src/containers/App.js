import React, {Component} from "react";
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from '../components/BurgerBulder/BurgerBuilder';
import myStyle from "./AppStyle";
import Checkout from './Checkout/Checkout';
import { Route } from "react-router-dom";
export default myStyle(class App extends Component {
  render(){
    const {classes} = this.props;
    return (
      <div className={classes.App}>
      <Layout>
      <Route path="/" component={BurgerBuilder} />
      <Route path="/checkout" component={Checkout} />
      </Layout>
    </div>

    );
  }
}
)

