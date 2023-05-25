import React from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

import useStyles from "./styles";

interface SuccessDialogProps {
    open: boolean;
    onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} className={classes.dialog}>
      <DialogTitle className={classes.dialogTitle}>Зареєстровано!</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Button className={classes.dialogButton} variant="outlined" size="large" onClick={onClose}>
                    Увійти
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
