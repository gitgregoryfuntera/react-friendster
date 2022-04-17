import React from "react";
import ProfileHeroBanner from "../../components/profile-hero-banner/profile-hero-banner.component";
import ProfilePicture from "../../components/profile-picture/profile-picture.component";
import classes from "./profile-page.module.scss";

const ProfilePage = () => {
  return (
    <div>
      <div className={classes["profileHeaderContainer"]}>
        <ProfileHeroBanner />
        <ProfilePicture />
      </div>
      Profile Page
    </div>
  );
};

export default ProfilePage;
