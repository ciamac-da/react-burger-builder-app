import React, {Component} from "react";
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from '../components/BurgerBulder/BurgerBuilder';
import myStyle from "./AppStyle";

export default myStyle(class App extends Component {
  render(){
    const {classes} = this.props;
    return (
      <div className={classes.App}>
      <Layout>
      <BurgerBuilder />
      </Layout>
    </div>

    );
  }
}
)

