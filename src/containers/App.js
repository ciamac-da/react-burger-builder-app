import React, {Component} from "react";
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from '../components/BurgerBulder/BurgerBuilder';
import myStyle from "./AppStyle";
import Checkout from './Checkout/Checkout';
import { Route, Switch } from "react-router-dom";
export default myStyle(class App extends Component {
  render(){
    const {classes} = this.props;
    return (
      <div className={classes.App}>
      <Layout>
      <Switch>
      <Route path="/" exact component={BurgerBuilder} />
      <Route path="/checkout" component={Checkout} />
      </Switch>
      </Layout>
    </div>

    );
  }
}
)

