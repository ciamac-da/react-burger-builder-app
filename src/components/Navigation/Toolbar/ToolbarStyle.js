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
  },
  BurgerLogo:{
    display:"flex",
    position:"relative !important",
    right:"480px !important",
    top:"-5px",
    [theme.breakpoints.down('sm')]: {
        display:"none !important",
        right:"15px !important",
        top:"0px",
    },
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.down('md')]: {
    },
    [theme.breakpoints.up('lg')]: {
        right: "400px !important",
    },
    [theme.breakpoints.up('xl')]: {
        right: "700px !impotant",
    },
    },
  }));

  export default useStyles;