import React from 'react';
import Aux from '../../hoc/aux';
import useStyles from "./LayoutStyle.js";
import TheToolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => {
    const classes = useStyles()
    return (
        <Aux>
        <TheToolbar />
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
      );
}
 
export default Layout;