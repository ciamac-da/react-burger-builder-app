import React from "react";
import { List, ListItem } from "@material-ui/core/";
import myStyle from "./NavigationStyle";

const Navigation = () => {
  const classes = myStyle();
  return (
    <div className={classes.Navi}>
      <List>
        <ListItem className={classes.Item1}> Burger Builder </ListItem>{" "}
      </List>{" "}
      <List>
        <ListItem className={classes.Item2}> Checkout </ListItem>{" "}
      </List>{" "}
    </div>
  );
};

export default Navigation;
