import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface VerificationStatusProps {
    buttonText: string;
}

const VerificationStatus: React.FC<VerificationStatusProps> = ({ buttonText }) => {
  const [verificationStatus, setVerificationStatus] = useState("Не верифіковано");

  const handleButtonClick = () => {
    setVerificationStatus("Верифіковано");
  };

  return (
    <div>
      <TextField
        id="verification-status"
        label="Verification Status"
        variant="outlined"
        InputProps={{
          readOnly: true,
        }}
        value={verificationStatus}
      />
      <div ><Button variant="contained" color="primary" onClick={handleButtonClick}>
        {buttonText}
      </Button></div>

    </div>
  );
};

export default VerificationStatus;
