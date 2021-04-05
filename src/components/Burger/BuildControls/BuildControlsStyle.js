import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
    MyTypo:{
        fontWeight:"bolder !important",
        color:"#000000  !important",
        margin:"20px 0px 20px 0px  !important",
        fontSize:"20px !important"
    },
    BuildControls:{
        margin:"auto",
        width:"100%",
        display:"flex",
        flexFlow:"column",
        alignItems:"center",
        boxShadow:"0 2px 1px white",
        padding:"10px 0",
        background: "linear-gradient(#F08E4A, #e27b36)",
        borderRadius:"10px"
    },
    MyButton:{
        margin:"20px 0px 20px 0px !important",
        background:"#ff9800 !important",
        color:"#000000 !important",
        transform: "translateX(0px) !important",
        transition: ".8s",
        fontWeight:"bolder !important",
        "&:hover":{
        transform: "translateX(10px) !important",
        transition: ".8s",

        }
    }
  }));

  export default useStyles;