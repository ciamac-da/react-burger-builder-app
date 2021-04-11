import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

 footer: {
   marginTop: 'auto',
   backgroundColor: "#ff9800",
   textAlign:"center",
   position:"fixed",
   bottom: 0,
   left:"0px",
   display:"block",
   width:"100vw",
   marginBottom:"0px",
   height:"33px",
   [theme.breakpoints.down('sm')]: {
     padding: "10px",
     width:"100vw",
     left:"0px"
    },
 },
 typo:{
       color:"#fff",
       fontWeight: "bolder",
 }
}));
export default useStyles;