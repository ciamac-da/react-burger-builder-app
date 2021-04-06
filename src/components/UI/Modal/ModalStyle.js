import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({

    Modal: {
        position: "fixed",
        zIndex: "500",
        backgroundColor: "white",
        width: "500px",
        left: "calc(50% - 250px)",
        border: "1px solid #ccc",
        boxShadow: "1px 1px 1px black",
        padding: "16px",
        top: "30%",
        boxSizing: "border-box",
        transition: "all 0.3s ease-out",
        [theme.breakpoints.down('sm')]: {
                },
                [theme.breakpoints.up('md')]: {
                },  
                [theme.breakpoints.up('lg')]: {
                },  
                [theme.breakpoints.up('xl')]: {
                },  
    }
  }));

  export default useStyles;