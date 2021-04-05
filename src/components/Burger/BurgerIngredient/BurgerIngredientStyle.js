import { withStyles } from "@material-ui/core/styles";

const useStyles = withStyles((theme) => ({
  BreadBottom: {
    height: "20% !important",
    width: "80% !important",
    background: "linear-gradient(#F08E4A, #e27b36) !important",
    borderRadius: "0 0 30px 30px !important",
    boxShadow: "inset -15px 0 #c15711 !important",
    margin: "2% auto",
    [theme.breakpoints.down('sm')]: {
    height: "13% !important",
        },
        [theme.breakpoints.up('md')]: {
          height: "15% !important",
        },  
        [theme.breakpoints.down('md')]: {
          height: "15% !important",  
        }, 
        [theme.breakpoints.up('lg')]: {
          height: "21% !important",
  
        }, 
        [theme.breakpoints.up('xl')]: {
          height: "21% !important",
        }, 
  },
  BreadTop: {
    height: "35% !important",
    width: "80% !important",
    background: "linear-gradient(#bc581e, #e27b36) !important",
    borderRadius: "50% 50% 0 0 !important",
    boxShadow: "inset -15px 0 #c15711 !important",
    margin: "2% auto !important",
    position: "relative !important",
    [theme.breakpoints.down('sm')]: {
    height: "20% !important",
      },
      [theme.breakpoints.up('md')]: {
      },  
      [theme.breakpoints.down('md')]: {

      }, 
      [theme.breakpoints.up('lg')]: {

      }, 
      [theme.breakpoints.up('xl')]: {
      }, 
  },
  Seeds1: {
    width: "10% !important",
    height: "15% !important",
    position: "absolute !important",
    backgroundColor: "white !important",
    left: "30% !important",
    top: "50% !important",
    borderRadius: "40% !important",
    transform: "rotate(-20deg) !important",
    boxShadow: "inset -2px -3px #c9c9c9 !important",
    "&::after": {
      content: '""!important',
      width: "100% !important",
      height: "100% !important",
      position: "absolute !important",
      backgroundColor: "white !important",
      left: "-170% !important",
      top: "-260% !important",
      borderRadius: "40% !important",
      transform: "rotate(60deg) !important",
      boxShadow: "inset -1px 2px #c9c9c9 !important",
      [theme.breakpoints.down('sm')]: {
      },
      [theme.breakpoints.up('md')]: {
      },  
      [theme.breakpoints.down('md')]: {
        width: "70% !important",
        height:"90% !important",

      }, 
      [theme.breakpoints.up('lg')]: {
        width: "80% !important",
        height:"90% !important"
      }, 
      [theme.breakpoints.up('xl')]: {
        width: "80% !important",
        height:"90% !important"
      }, 
    },
    "&::before": {
      content: '""!important',
      width: "100% !important",
      height: "100% !important",
      position: "absolute !important",
      backgroundColor: "white !important",
      left: "180% !important",
      top: "-50% !important",
      borderRadius: "40% !important",
      transform: "rotate(60deg) !important",
      boxShadow: "inset -1px -3px #c9c9c9 !important",
      [theme.breakpoints.down('sm')]: {
      },
      [theme.breakpoints.up('md')]: {
        width: "80% !important",
        height:"90% !important",
        position: "absolute !important",
        top: "90% !important",

      },  
      [theme.breakpoints.down('md')]: {
        width: "80% !important",
        height:"90% !important",
        top: "90% !important",

      }, 
      [theme.breakpoints.up('lg')]: {
        top: "120% !important",
        width: "80% !important",
      }, 
      [theme.breakpoints.up('xl')]: {
        top: "120% !important",
        width: "80% !important",

      }, 
    },
  },
  Seeds2: {
    width: "10% !important",
    height: "15% !important",
    position: "absolute !important",
    backgroundColor: "white !important",
    left: "64% !important",
    top: "50% !important",
    borderRadius: "40% !important",
    transform: "rotate(10deg) !important",
    boxShadow: "inset -3px 0 #c9c9c9 !important",
    "&::before": {
      content: '""!important',
      width: "100% !important",
      height: "100% !important",
      position: "absolute !important",
      backgroundColor: "white !important",
      left: "150% !important",
      top: "-130% !important",
      borderRadius: "40% !important",
      transform: "rotate(90deg) !important",
      boxShadow: "inset 1px 3px #c9c9c9 !important",
      [theme.breakpoints.down('sm')]: {
      },
      [theme.breakpoints.up('md')]: {
      },  
      [theme.breakpoints.down('md')]: {

      }, 
      [theme.breakpoints.up('lg')]: {
        width: "80% !important",
      }, 
      [theme.breakpoints.up('xl')]: {
        width: "80% !important",

      }, 
    },
  },
  Meat: {
    width: "80%",
    height: "8%",
    background: "linear-gradient(#7f3608, #702e05)",
    margin: "2% auto",
    borderRadius: "15px",
  },
  Cheese: {
    width: "90%",
    height: "4.5%",
    margin: "2% auto",
    background: "linear-gradient(#f4d004, #d6bb22)",
    borderRadius: "20px",
  },
  Salad: {
    width: "85%",
    height: "7%",
    margin: "2% auto",
    background: "linear-gradient(#228c1d, #91ce50)",
    borderRadius: "20px",
  },
  Bacon: {
    width: "80%",
    height: "3%",
    background: "linear-gradient(#bf3813, #c45e38)",
    margin: "2% auto",
  },
}));

export default useStyles;
