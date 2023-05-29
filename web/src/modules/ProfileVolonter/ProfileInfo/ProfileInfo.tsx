import React from "react";
import { Typography } from "@mui/material";

interface ProfileInfoProps {
    fullName: string;
    email: string;
    phone: string;
    address: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ fullName, email, phone, address }) => {
  return (
    <div style={{marginTop:"30px"}}>
      <Typography variant="body1">Full Name: {fullName}</Typography>
      <Typography variant="body1">Email: {email}</Typography>
      <Typography variant="body1">Phone: {phone}</Typography>
      <Typography variant="body1">Address: {address}</Typography>
    </div>
  );
};

export default ProfileInfo;
