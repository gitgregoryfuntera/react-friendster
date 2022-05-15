import React from "react";
import ProfileDetails from "../../components/profile-details/profile-details.component";
import ProfileHeroBanner from "../../components/profile-hero-banner/profile-hero-banner.component";
import ProfilePicture from "../../components/profile-picture/profile-picture.component";
import ProfileShoutOut from "../../components/profile-shout-out/profile-shout-out.component";
import Testimonials from "../../components/testimonials/testimonials.component";
import UserConnections from "../../components/user-connections/user-connections.component";
import classes from "./profile-page.module.scss";

const ProfilePage = () => {
  return (
    <div className="pageLayout">
      <div className={classes["profileHeaderContainer"]}>
        <ProfileHeroBanner />
        <ProfilePicture />
        <ProfileShoutOut />
        <ProfileDetails />
      </div>
      <div>
        <div>
          <Testimonials />
        </div>
        <div>
          <UserConnections />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
