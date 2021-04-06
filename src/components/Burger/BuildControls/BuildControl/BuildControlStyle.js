import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
    
    BuildControl: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "5px 0",
    },

    LabelTypo: {
        padding: "10px",
        width: "90px",
        fontWeight:"bolder",
        textAlign:"center"
    },
    More:{
        backgroundColor:"#ff3d00",
        color:"#ffffff",
        margin:"4px",
        transition:"1s",
        fontWeight:"bolder",
        "&:hover":{
        color:"#ff3d00",
        backgroundColor:"#fff",
        transition:"1s"
        }
    },
    Less:{
        backgroundColor:"#2e7031",
        color:"#ffffff",
        margin:"4px",
        fontWeight:"bolder",
        transition:"1s",
        "&:hover":{
            color:"#2e7031",
            backgroundColor:"#fff",
            transition:"1s"
            }
    }
    

  }));

  export default useStyles;
