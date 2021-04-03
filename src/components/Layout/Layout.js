import React from 'react';
import Aux from '../../hoc/aux';
import useStyles from "./LayoutStyle.js";


const Layout = (props) => {
    const classes = useStyles()
    return (
        <Aux>
            <div >
                Side Drawer, back drop...
            </div>
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
      );
}
 
export default Layout;