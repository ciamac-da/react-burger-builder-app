import React,{Component} from 'react';
import Aux from '../../hoc/aux';
import myStyle from "./LayoutStyle.js";
import TheToolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

export default myStyle(class Layout extends Component {
    
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    }

    render(){
        const classes = this.props;
        return (
            <Aux>
            <SideDrawer 
            closed={this.sideDrawerClosedHandler} 
            open={this.state.showSideDrawer}
            />
            <TheToolbar />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
          );
    }
}
)