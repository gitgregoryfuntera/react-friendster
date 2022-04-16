import React from "react";
import ProfileHeroBanner from "../../components/profile-hero-banner/profile-hero-banner.component";
import ProfilePicture from "../../components/profile-picture/profile-picture.component";
import classes from "./profile-page.module.scss";

const ProfilePage = () => {
  return (
    <div>
      <ProfileHeroBanner />
      <ProfilePicture />
      Profile Page
    </div>
  );
};

export default ProfilePage;
