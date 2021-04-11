import React from "react";
import { List, ListItem } from "@material-ui/core/";
import myStyle from "./NavigationStyle";
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  const classes = myStyle();
  return (
    <div className={classes.Navi}>
      <List>
        <ListItem className={classes.Item1}>
         <NavLink 
         to="/"
         activeStyle={{
         fontWeight: "bold",
         color: "black",
         textDecoration:"none"
          }}
         >
         Burger Builder 
         </NavLink>
         </ListItem>{" "}
      </List>{" "}
      <List>
        <ListItem>
        <NavLink 
        to="/checkout"
        className={classes.Item2}
         activeStyle={{
         fontWeight: "bold",
         color: "black",
         textDecoration:"none"
          }}>
         Checkout 
         </NavLink>
         </ListItem>{" "}
      </List>{" "}
    </div>
  );
};

export default Navigation;
