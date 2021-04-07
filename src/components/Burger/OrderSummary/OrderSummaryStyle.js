import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
    Ul:{
        display:"block",
    },
    List: {
        display:"block",
        padding:"0px",
        textAlign:"center",
        margin:"4px"
    },
    Span:{
        textTransform:"capitalize",
    },
    H5:{
        background: "linear-gradient(#F08E4A, #e27b36)  !important",
        textAlign:"center",
        borderRadius:"10px",
        fontWeight:"bolder"
    },
    BurgerLogo:{
        position:"relative",
        top:"7px",
        left:"5px"
    },
    Subscribe:{
        textAlign:"center",
        marginTop:"10px",
        fontWeight:"bolder"

    },
    ContinueTypo:{
       marginTop:"10px",
       display:"flex",
       justifyContent:"center",
       fontWeight:"bolder"
    },
    BtnDiv:{
        display:"flex ",
        justifyContent:"space-around",
    },
    ContinueButton:{
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
    CancelButton:{
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