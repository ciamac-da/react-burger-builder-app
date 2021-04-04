import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
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
        
    }
  }));

  export default useStyles;