import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
SideDrawer:{
    position:"fixed",
    width:"280px",
    maxWidth:"70%",
    left:"0",
    top:"0",
    zIndex:"200",
    backgroundColor:"white",
    padding: "32px 16px",
    boxSizing: "border-box",
    transition:"transform 0.3s ease-out",
    [theme.breakpoints.down('sm')]: {
      
    },
    [theme.breakpoints.up('sm')]: {
        display:"none"
    },
    [theme.breakpoints.up('lx')]: {
    
    },
},
Open:{
    transform:"translateY(0)"
},
Close:{
    transform:"translateY(-100%)"
}
  }));

  export default useStyles;