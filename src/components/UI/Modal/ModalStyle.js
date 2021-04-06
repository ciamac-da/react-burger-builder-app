import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({

    Modal: {
        position: "fixed",
        zIndex: "500",
        backgroundColor: "white",
        width: "70%",
        border: "1px solid #ccc",
        boxShadow: "1px 1px 1px black",
        padding: "16px",
        left: "15%",
        top: "30%",
        boxSizing: "border-box",
        transition: "all 0.3s ease-out",
        [theme.breakpoints.down('sm')]: {
            width: "500px",
            left: "calc(50% - 250px)"
                },
                [theme.breakpoints.up('md')]: {
                  height: "15% !important",
                },  
             
    }
  }));

  export default useStyles;