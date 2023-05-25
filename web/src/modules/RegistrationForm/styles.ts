import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  form: {
    marginTop:"110px",
    marginBottom:"20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "rgba(58, 170, 231, 0.3)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    marginBottom: "16px",
  },
  inputContainer: {
    display: "flex",
    gap: "8px",
    marginBottom: "16px",
  },
  input: {
    width: "100%",

  },
  phoneInputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "16px",
  },
  phoneInputPrepend: {
    background: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    padding: "4px 8px",
    borderRadius: "4px 0 0 4px",
  },
  phoneInputText: {
    color: "#555",
  },
  phoneInput: {
    flex: 1,
    padding: "5px",
    borderRadius: "0 9px 9px 0",
    border: "1px solid #555",
    width: "95%",
    height:"4vh",
    background: "rgba(0, 0, 0, 0)",



  },
  label: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "4px",
  },
  accountTextContainer: {
    marginTop: "16px",
    textAlign: "center",
  },
  accountText: {
    fontSize: "14px",
    color: "#555",
  },
  loginButton: {
    marginLeft: "4px",
    color: "#007bff",
    textDecoration: "none",
    cursor: "pointer",
  },
});
