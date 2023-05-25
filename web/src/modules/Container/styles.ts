import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flex: "1 1 auto",
    margin: "0 auto",
    background: "linear-gradient(0deg, rgba(58,170,231,0.5984987745098039) 0%, rgba(53,46,245,0.3463979341736695) 100%)",
    height: "100%", // Set the height to 100%
    overflow: "auto", // Allow content to overflow with a scrollbar when necessary
  },
}));
