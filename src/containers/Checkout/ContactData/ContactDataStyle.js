import { withStyles } from "@material-ui/core/styles";

const useStyles = withStyles((theme) => ({
    contactData:{
        margin:"20px auto",
        width:"80%",
        boxShadow:"0 2px 3px #ccc",
        border:"1px solid #eee",
        padding:"10px",
        boxSizing:"border-box",
        textAlign:"center",
        marginBottom:"40px !important",
        [theme.breakpoints.down("sm")]: {
            width: "500px",
        },
    },
    btnDiv:{
        display:"flex ",
        justifyContent:"space-around",
        width:"505px",
        margin:"auto",
        marginTop:"60px",
        [theme.breakpoints.down("sm")]: {
            width: "200px",
        },
    },
      continueButton:{
        margin:"20px 0px 20px 0px !important",
        background:"#2e7031!important",
        color:"#fff !important",
        transform: "translateX(0px) !important",
        transition: ".8s !important",
        fontWeight:"bolder !important",
        "&:hover":{
        transform: "translateX(10px) !important",
        transition: ".8s !important",
        background:"#ff9800 !important",
        color:"#000000 !important",
        }
    },
}));

export default useStyles;
