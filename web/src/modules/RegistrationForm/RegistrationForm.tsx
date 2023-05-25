import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, FormControlLabel, TextField, Dialog, Container } from "@mui/material";

import { useStyles } from "./styles";

const RegistrationForm: React.FC = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [isVolunteer, setIsVolunteer] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const handleVolunteerCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsVolunteer(event.target.checked);
  };

  const handleFormSubmit = (data: any) => {
    // Perform registration logic
    setIsSuccessDialogOpen(true);
  };

  const handleCloseSuccessDialog = () => {
    setIsSuccessDialogOpen(false);
  };

  return (
    <Container >
      <Container className={classes.form}>
        <h2 className={classes.heading}>
            Реєстрація
        </h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Container className={classes.inputContainer}>
            <TextField
              type="email"
              id="typeEmailX"
              className={classes.input}
              {...register("email")}
              label="Електронна пошта"
            />
          </Container>
          <Container className={classes.inputContainer}>
            <TextField
              type="password"
              id="typePasswordX"
              className={classes.input}
              {...register("password")}
              label="Пароль"
            />
            <TextField
              type="password"
              id="typeConfirmPasswordX"
              className={classes.input}
              {...register("confirmPassword")}
              label="Підтвердження паролю"
            />
          </Container>
          <Container className={classes.inputContainer}>
            <TextField
              type="text"
              id="typeNameX"
              className={classes.input}
              {...register("firstName")}
              label="Ім'я"
            />
            <TextField
              type="text"
              id="typeSurnameX"
              className={classes.input}
              {...register("lastName")}
              label="Призвіще"
            />
          </Container>



          <Container className={classes.phoneInputText}>+380 <input
            type="text"
            id="phone"
            maxLength={9}
            className={classes.phoneInput}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");
            }}
          /></Container>


          <Container className={classes.inputContainer}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isVolunteer}
                  onChange={handleVolunteerCheckboxChange}
                  name="volunteer"
                  id="flexSwitchCheckDefault"
                  color="primary"
                />
              }
              label="Я волонтер"
            />
            {isVolunteer && (
              <Container id="volunteer-fields">
                <TextField
                  type="text"
                  name="address"
                  id="address"
                  className={classes.input}
                  label="Адреса"
                />
                <TextField
                  type="text"
                  name="volunteer-code"
                  id="volunteer-code"
                  className={classes.input}
                  label="Назва волонтерської організації"
                />
              </Container>
            )}
          </Container>
          <Button variant="outlined" size="medium" type="submit">
              Підтвердити
          </Button>
          <Container className={classes.accountTextContainer}>
            <p className={classes.accountText}>
                Маєте аккаунт?
              <a href="login.html" className={classes.loginButton} role="button">
                  Увійти
              </a>
            </p>
          </Container>
        </form>
      </Container>
      <Dialog open={isSuccessDialogOpen} onClose={handleCloseSuccessDialog}>
        {/* Success dialog content */}
      </Dialog>
    </Container>
  );
};

export default RegistrationForm;
