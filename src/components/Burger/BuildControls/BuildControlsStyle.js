import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
    MyTypo:{
        fontWeight:"bolder",
        color:"#000000",
        margin:"20px 0px 20px 0px",
        fontSize:"20px"
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
        transform: "translate 20px",
        fontWeight:"bolder !important",
        "&:hover":{
            color:"#615f66 !important",
        transform: "translateX 20px",

        }
    }
  }));

  export default useStyles;