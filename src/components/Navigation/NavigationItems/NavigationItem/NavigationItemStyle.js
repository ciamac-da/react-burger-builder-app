import {
    makeStyles
} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    NavItem: {
        margin: "0px",
        display: "flex",
        alignItems: "center",
        height: "100%",
        boxSizing: "border-box",
    },
    NavA: {
        color: "#fff",
        textDecoration: "none",
        height: "100px",
        padding: "16px 10px",
        borderBottom: "4px solid transparent",
        boxSizing: "border-box",
        display: "block",
        "&:hover": {
            background: "#8F5C2C",
            borderBottom: "4px solid #40A4CB",
            color: "#fff",
            display: "block"
        },
        "&:active": {
            background: "#8F5C2C",
            borderBottom: "4px solid #40A4CB",
            color: "#fff",
            display: "block"
        },
      
    },
    NavItemActive: {
        background: "#8F5C2C",
        borderBottom: "4px solid #40A4CB",
        color: "#fff",
        display: "block"
    }
}));

export default useStyles;