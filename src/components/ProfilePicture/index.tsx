import React from "react";
import classes from "./styles.module.scss";

const ProfilePicture = () => {
  return (
    <div className={classes.profilePictureContainer}>
      <img src="http://www.placecage.com/250/250"/>
    </div>
  );
};

export default ProfilePicture;
