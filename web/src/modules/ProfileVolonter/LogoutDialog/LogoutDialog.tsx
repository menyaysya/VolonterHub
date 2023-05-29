import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const LogoutDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    window.location.href = "/logout"; // Replace with your logout logic
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleOpen}>Logout</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Logout Confirmation</DialogTitle>
        <DialogContent>Are you sure you want to logout?</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleLogout} color="primary">Logout</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogoutDialog;
