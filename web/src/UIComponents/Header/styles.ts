import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    "&.MuiPaper-root": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 10px",

  },
  wrapLogo: {
    display: "flex",
    alignItems: "center",
  },
  navbar: {
    "& ul": {
      display: "flex",
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },
  },
  navbarBrand: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "24px",
    fontWeight: "bold",
    marginRight: "20px",
    "&:hover": {
      color: "#fff",
    },
  },
  navbarNav: {
    display: "flex",
  },
  navItem: {
    "&:not(:last-child)": {
      marginRight:" -10px ",
    },
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    "&:hover": {
      color: "#fff",
    },
  },
}));

export default useStyles;
