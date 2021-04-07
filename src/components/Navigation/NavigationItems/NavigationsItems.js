import React from "react";
import myStyle from "./NavigationItemsStyle";
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    const classes = myStyle()
  return (
    <li className={classes.NavItems}>
      <NavigationItem to="/" active={true} >Burger Builder</NavigationItem>
      <NavigationItem to="/">Checkout</NavigationItem>
    </li>
  );
};

export default NavigationItems;
