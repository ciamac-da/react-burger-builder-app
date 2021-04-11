import React from "react";
import myStyle from "./SideDrawerStyle";
import { List, ListItem } from "@material-ui/core/";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from 'react-router-dom';
import Aux from "../../../hoc/Aux/Aux";

const SideDrawer = (props) => {
  const classes = myStyle();
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />{" "}
      <div className={attachedClasses.join(" ")}>
        <img
          className={classes.Logo}
          src="https://img.icons8.com/doodle/70/000000/hamburger.png"
        />
        <div className={classes.Navi}>
          <List className={classes.List}>
            <ListItem 
            className={classes.Item1}
            > 
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
            <ListItem 
            className={classes.Item2}
            > 
            <NavLink
            className={classes.checkout}
              to="/checkout"
              activeStyle={{
              fontWeight: "bold",
              color: "black",
              textDecoration:"none"
          }}
            >
            Checkout 
            </NavLink>
            </ListItem>{" "}
          </List>{" "}
        </div>{" "}
      </div>{" "}
    </Aux>
  );
};

export default SideDrawer;
