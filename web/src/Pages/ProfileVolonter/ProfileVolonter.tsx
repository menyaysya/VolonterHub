import React from "react";
import { Container, Box } from "@mui/material";

import Avatar from "../../modules/ProfileVolonter/Avatar/Avatar";
import VerificationStatus from "../../modules/ProfileVolonter/VerificationStatus/VerificationStatus";
import TrustRating from "../../modules/ProfileVolonter/TrustRating/TrustRating";
import Bio from "../../modules/ProfileVolonter/Bio/Bio";
import ProfileInfo from "../../modules/ProfileVolonter/ProfileInfo/ProfileInfo";
import PostsAndCampaigns from "../../modules/ProfileVolonter/PostsAndCampaigns/PostsAndCampaigns";
import LogoutDialog from "../../modules/ProfileVolonter/LogoutDialog/LogoutDialog";

const VolunteerProfile = () => {
  const avatarProps = {
    imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
    altText: "avatar",
    name: "Volonter 1",
  };

  const verificationStatusProps = {
    buttonText: "Пройти",
  };

  const trustRatingProps = {
    rating: "80%",
  };

  const bioProps = {
    description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquid animi blanditiis commodi cupiditate dolorum eaque incidunt iste iusto laboriosam, maxime nemo nobis quibusdam ratione reprehenderit repudiandae soluta voluptatem!",
    moreInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
  };

  const profileInfoProps = {
    fullName: "Volonter Volonter",
    email: "example@example.com",
    phone: "(097) 234-5678",
    address: "Bay Area, San Francisco, CA",
  };
  const PostsAndCampaignsProps ={
    content:"ghjgjhghjghjgjhhg",
  };

  return (
    <div>
      <header>
        {/* Include your header component */}
      </header>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Avatar {...avatarProps} />
          <VerificationStatus {...verificationStatusProps} />

          <TrustRating {...trustRatingProps} />
          <Bio {...bioProps} />

          <ProfileInfo {...profileInfoProps} />
          <LogoutDialog />
          <PostsAndCampaigns {...PostsAndCampaignsProps} />

        </Box>
      </Container>


    </div>
  );
};

export default VolunteerProfile;
