import React from "react";
import { Avatar as MuiAvatar, Typography } from "@mui/material";

interface AvatarProps {
    imageUrl: string;
    altText: string;
    name: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText, name }) => {
  return (
    <div>
      <MuiAvatar src={imageUrl} alt={altText} sx={{ width: 150, height: 150 , marginTop: 10}} />
      <Typography variant="h5" align="center" gutterBottom>{name}</Typography>
    </div>
  );
};

export default Avatar;
