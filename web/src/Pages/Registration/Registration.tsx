import React from "react";

import {Typography} from "@mui/material";

import {NavLink} from "react-router-dom";

import RegistrationForm from "../../modules/RegistrationForm/RegistrationForm";

import {useStyles} from "./styles";

const Registration = () => {
  const styles = useStyles();
  return (
    <>

      <RegistrationForm/>

    </>
  );
};

export default Registration;