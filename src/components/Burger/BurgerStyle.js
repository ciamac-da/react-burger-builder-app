import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
    Burger: {
        width: "100%",
        height: "250px",
        margin: "auto",
        overflow: "auto",
        fontWeight: "bolder",
        textAlign: "center",
        fontSize: "1.2em",
        [theme.breakpoints.down('sm')]: {
          width: "100% !important",
          height:"250px !important",
          },
          [theme.breakpoints.up('md')]: {
              width: "60% !important",
          },  
          [theme.breakpoints.down('md')]: {
              width: "60% !important",
              height:"350px",
          }, 
          [theme.breakpoints.up('lg')]: {
              width: "60%  !important",
              height:"350px",

          }, 
          [theme.breakpoints.up('xl')]: {
              width: "50%  !important",
              height:"550px",
          }, 
      },

  }));

  export default useStyles;