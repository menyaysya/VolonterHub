import React from "react";
import { Typography, Box } from "@mui/material";

interface PostsAndCampaignsProps {
    content: string;
}

const PostsAndCampaigns: React.FC<PostsAndCampaignsProps> = ({ content }) => {
  return (
    <Box mt={4}>
      <Typography variant="h6" align="center" color="success.main" fontStyle="italic">Posts and Campaigns</Typography>
      <Typography variant="body1" align="center">{content}</Typography>
    </Box>
  );
};

export default PostsAndCampaigns;
