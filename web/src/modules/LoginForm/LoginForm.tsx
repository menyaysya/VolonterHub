import React from "react";
import { Container, Typography, TextField, Button, Link } from "@mui/material";
import { withStyles, WithStyles } from "@mui/styles";

import styles from "./styles";

type LoginFormProps = WithStyles<typeof styles>;

const LoginForm: React.FC<LoginFormProps> = ({ classes }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
      <Container maxWidth="sm" className={classes.container}>

      <Typography variant="h2" align="center" gutterBottom>
                Вхід
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          id="typeEmailX"
          label="Електронна пошта"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          type="password"
          id="typePasswordX"
          label="Пароль"
          margin="normal"
          fullWidth
          required
        />
        <div className={classes.formGroup}>
          <Typography variant="body2">
            <Link href="passwordReset.html" color="inherit">
                            Забули пароль?
            </Link>
          </Typography>
          <Button variant="outlined" type="submit">
                        Увійти
          </Button>
        </div>
      </form>
      <div className={classes.registerGroup}>
        <Typography variant="body2" className={classes.registerText}>
                    Немає аккаунту?{" "}
          <Button href="registration.html" variant="outlined" size="small">
                        Зареєструватися
          </Button>
        </Typography>
      </div>
    </Container>
  );
};

export default withStyles(styles)(LoginForm);