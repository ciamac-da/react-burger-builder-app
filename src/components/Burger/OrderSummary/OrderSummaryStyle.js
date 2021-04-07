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
        marginTop:"10px"
    }
  }));

  export default useStyles;