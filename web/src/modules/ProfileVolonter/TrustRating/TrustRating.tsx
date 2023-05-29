import React from "react";
import { Typography, LinearProgress } from "@mui/material";

import { useStyles } from "./styles";

interface TrustRatingProps {
    rating: string;
}

const TrustRating: React.FC<TrustRatingProps> = ({ rating }) => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="body1" align="center" gutterBottom className={classes.title}>
                Trust Rating
            </Typography>
            <LinearProgress variant="buffer" color={"success"} value={parseInt(rating)} className={classes.progress} />
        </div>
    );
};

export default TrustRating;
