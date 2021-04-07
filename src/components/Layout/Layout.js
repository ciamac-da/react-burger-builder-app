import React from 'react';
import Aux from '../../hoc/aux';
import useStyles from "./LayoutStyle.js";
import TheToolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const classes = useStyles()
    return (
        <Aux>
        <SideDrawer />
        <TheToolbar />
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
      );
}
 
export default Layout;