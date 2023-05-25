import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Додайте тип для anchorEl

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => { // Додайте тип для event
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar  className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.wrapLogo}>
          <Typography
            variant="h6"
            component="a"
            href="#"
            className={classes.navbarBrand}
          >
                        VOLUNTEER HUB
          </Typography>
          <Button
            component="button"
            className={classes.navLink}
            onClick={handleMenuOpen}
            type="button"
          >
            &#9776;
          </Button>

          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Button component="a" href="#" className={classes.navLink}>
                                Профіль
              </Button>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Button component="a" href="#" className={classes.navLink}>
                                Волонтери
              </Button>
            </MenuItem>
          </Menu>
        </div>
        <nav className={classes.navbar}>
          <ul className={classes.navbarNav}>
            <li className={classes.navItem}>
              <Button component="a" href="#" className={classes.navLink}>
                                Увійти
              </Button>
            </li>
            <li className={classes.navItem}>
              <Button component="a" href="#" className={classes.navLink}>
                                Зареєструватися
              </Button>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
