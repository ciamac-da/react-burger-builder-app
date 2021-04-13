import React, {Component} from "react";
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from '../components/BurgerBulder/BurgerBuilder';
import myStyle from "./AppStyle";
import Checkout from './Checkout/Checkout';
import { Route, Switch } from "react-router-dom";
import Orders from './Orders/Orders';


export default myStyle(class App extends Component {
  render(){
    const {classes} = this.props;
    return (
      <div className={classes.App}>
      <Layout>
      <Switch>
      <Route path="/checkout" component={Checkout} />
      <Route path="/orders" component={Orders} />
      <Route path="/" exact component={BurgerBuilder} />
      </Switch>
      </Layout>
    </div>

    );
  }
}
)

