import {
    makeStyles
} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   Menu:{
       display:"flex",
       position:"relative",
       fontWeight:"bolder",
       top:"15px",
       [theme.breakpoints.up('md')]: {
           display:"none !important"
        },
    },
    Logo:{
        position:"relative",

    },
    MenuTypo:{
        position:"relative",
        left:"5px",
        fontWeight:"bolder",
        color:"#000000",
        fontSize:"20px"
    }
       
}));

export default useStyles;