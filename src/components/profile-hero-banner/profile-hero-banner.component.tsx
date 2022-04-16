import React from "react";
import classes from "./profile-hero-banner.module.scss";

const ProfileHeroBanner = () => {
  return (
    <div>
      <div className={classes["profileHeroBannerContainer"]}>
        <img src="/images/profile-hero-banner.png" />
      </div>
    </div>
  );
};

export default ProfileHeroBanner;
