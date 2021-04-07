import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
    MyTypo:{
        fontWeight:"bolder !important",
        color:"#000000  !important",
        margin:"20px 0px 20px 0px  !important",
        fontSize:"20px !important"
    },
    BuildControls:{
        margin:"auto  !important",
        width:"100%  !important",
        position:"relative",
        top:"60px",
        display:"flex  !important",
        flexFlow:"column  !important",
        alignItems:"center  !important",
        boxShadow:"0 2px 1px white  !important",
        padding:"10px 0  !important",
        background: "linear-gradient(#F08E4A, #e27b36)  !important",
        borderRadius:"10px !important"
    },
    MyButton:{
        margin:"20px 0px 20px 0px !important",
        background:"#ff9800 !important",
        color:"#000000 !important",
        transform: "translateX(0px) !important",
        transition: ".8s !important",
        fontWeight:"bolder !important",
        "&:hover":{
        transform: "translateX(10px) !important",
        transition: ".8s !important",

        }
    }
  }));

  export default useStyles;