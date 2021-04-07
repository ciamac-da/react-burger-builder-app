import {
    makeStyles
} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    Navi: {
        display: "flex !important",
        position: "relative",
        top: "20px",
        left: "500px",
        fontSize: "20px",
        fontWeight: "bolder",
        [theme.breakpoints.down('sm')]: {
            top: "12px",
            left: "30px",
            textAlign: "center",
        },
        [theme.breakpoints.up('sm')]: {
            top: "20px",
            left: "150px",
            textAlign: "center",
        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.down('md')]: {

        },
        [theme.breakpoints.up('lg')]: {
            top: "20px",
            left: "400px !important",
            textAlign: "center",
        },
        [theme.breakpoints.up('xl')]: {
            top: "20px",
            left: "500px !important",
            textAlign: "center",
        },
    },
    Item1: {
        background: "transparent",
        cursor: "pointer",
        height:"50px",
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            top: "5px",
            left:"10px !important",
            textAlign: "center",
        },
        [theme.breakpoints.up('sm')]: {
            position: "relative",
            top: "-5px",
            left:"10px !important",
            textAlign: "center",
        },
        [theme.breakpoints.up('lx')]: {
            position: "relative",
            top: "15px",
            left:"10px !important",
            textAlign: "center",
        },
        "&:hover": {
            background: "#fff",
            color: "#ff9800",
            borderRadius: "10px",
           
        }
    },
    Item2: {
        background: "transparent",
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            top: "9px",
            textAlign: "center",
        },
        [theme.breakpoints.up('sm')]: {
            position: "relative",
            top: "0px",
            textAlign: "center",
        },
        "&:hover": {
            background: "#fff",
            color: "#ff9800",
            borderRadius: "10px",
        }
    },
}));

export default useStyles;