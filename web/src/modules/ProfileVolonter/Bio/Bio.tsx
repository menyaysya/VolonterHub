import React from "react";
import { Typography } from "@mui/material";

interface BioProps {
    description: string;
    moreInfo: string;
}

const Bio: React.FC<BioProps> = ({ description, moreInfo }) => {
  return (
    <div>
      <Typography variant="body1"  paragraph>{description}</Typography>
      <Typography variant="body1" align="center">{moreInfo}</Typography>
    </div>
  );
};

export default Bio;
