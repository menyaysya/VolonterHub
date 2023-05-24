
import {Box, Typography} from "@mui/material";


import {NavLink} from "react-router-dom";

import LoginForm from "../../modules/LoginForm/LoginForm";

import {useStyles} from "./styles";

const Login = () => {
  const styles = useStyles();

  return (
    <Box className={styles.wrapper}>

      <LoginForm/>


    </Box>
  );
};

export default Login;