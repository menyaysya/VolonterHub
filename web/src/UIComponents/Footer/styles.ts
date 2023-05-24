import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const useStyles = makeStyles({
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backdropFilter: "blur(20px)",
    background: "rgba(255, 255, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    "& .MuiTypography-root": {
      color: "#000000",
      opacity: "80%",
    },
    "& .MuiLink-root": {
      color: "#000000",
      opacity: "80%",
    },
  },
});
