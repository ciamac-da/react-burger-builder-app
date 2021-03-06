import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
 Backdrop:{
     width:"100%",
     height:"100%",
     position:"fixed",
     zIndex:"100",
     left:"0",
     top: 0,
     backgroundColor:"rgba(0, 0, 0, 0.5)"
 }
  }));

  export default useStyles;