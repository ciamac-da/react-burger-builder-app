import React,{Component} from 'react';
import Aux from '../Aux/Aux';
import myStyle from "./LayoutStyle.js";
import TheToolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/common/Footer/Footer';

export default myStyle(class Layout extends Component {
    
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () =>{
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render(){
        const classes = this.props;
        return (
            <Aux>
            <TheToolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer 
            closed={this.sideDrawerClosedHandler} 
            open={this.state.showSideDrawer}
            />
                <main className={classes.content}>
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
          );
    }
}
)