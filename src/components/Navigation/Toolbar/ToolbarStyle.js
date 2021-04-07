import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  Toolbar:{
      height:"56px",
      width:"100%",
      position:"fixed",
      top:"0",
      left:"0",
      backgroundColor:"#ff9800 !important",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"0 20px",
      boxSizing:"boder-box",
      zIndex:"90"
  },
  Nav:{
      height:"100px"
  }
  }));

  export default useStyles;