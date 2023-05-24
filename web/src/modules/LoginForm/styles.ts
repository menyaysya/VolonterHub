import { createStyles } from "@mui/styles";

const styles = createStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    marginTop: "200px",
    backgroundColor: "rgba(58, 170, 231, 0.3)",
    backdropFilter: "blur(10px)",
    minHeight: "50vh",
  },
  formGroup: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "2vh",
  },
  registerGroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5vh",
  },
  registerText: {
    margin: "0.75rem",
  },
});


export default styles;
