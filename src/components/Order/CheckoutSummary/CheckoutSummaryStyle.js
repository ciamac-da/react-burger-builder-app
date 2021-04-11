import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  checkoutSummary: {
    textAlign: "center",
    width: "80%",
    margin: "auto",
    paddingTop:"100px",

    [theme.breakpoints.down("sm")]: {
        width: "350px",
    },
    [theme.breakpoints.up("md")]: {
    },
    [theme.breakpoints.up("lx")]: {},
  },
  typo:{
    fontWeight:"bolder",
    fontSize:"24px"
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
cancelButton:{
    margin:"20px 0px 20px 0px !important",
    background:"#ff3d00 !important",
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
}
}));

export default useStyles;
