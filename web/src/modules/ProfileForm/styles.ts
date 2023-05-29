import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
  rootForm:{
    marginTop:"110px",
    marginBottom:"20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  inputBlock:{
    width: "100%",
  },
  imageWrapper: {
    padding: 20,
    backgroundColor: "#F1F0FA",
  },
  image:{
    height: 270,
    width: 250,
  },
  dateInput:{
    "&MuiFormControl-root":{
      display: "flex",
      flexDirection: "row",
    },
  },


});