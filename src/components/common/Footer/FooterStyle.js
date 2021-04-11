import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

 footer: {
   marginTop: 'auto',
   backgroundColor: "#ff9800",
   textAlign:"center",
   position:"fixed",
   bottom: 0,
   display:"block",
   width:"100vw",
   marginBottom:"0px",
   height:"33px"
 },
 typo:{
       color:"#fff",
       fontWeight: "bolder",
 }
}));
export default useStyles;