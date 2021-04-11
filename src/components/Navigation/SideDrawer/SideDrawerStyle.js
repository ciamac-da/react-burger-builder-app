import {
    makeStyles
} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    SideDrawer: {
        position: "fixed",
        width: "280px",
        maxWidth: "70%",
        left: "0px",
        height: "100%",
        zIndex: "200 !important",
        backgroundColor: "gray",
        padding: "32px 16px",
        boxSizing: "border-box",
        top:"0px",
        transition: "transform 0.3s ease-out",
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
        [theme.breakpoints.up('lx')]: {

        },
    },
    Logo: {
        position: "relative",
        marginTop:"50px",
        left: "80px"
    },
    Nav: {
        display: "flex",
        flexDirection: "column",
    },
    List: {
        fontWeight: "bolder",
        fontSize: "20px",
        margin: "10px",
        position: "relative",
        left: "30px"
    },
    checkout:{
        color:"black",
        textDecoration:"none"
    },
    Item1: {
        marginBottom: "15px",
        marginTop: "15px",
        color: "#fff"
    },
    Item2: {
        position: "relative",
        left: "15px",
        color: "#fff"
    },

    Open: {
        transform: "translateY(0)"
    },
    Close: {
        transform: "translateY(-100%)"
    },

}));

export default useStyles;