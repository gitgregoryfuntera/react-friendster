import React from "react";
import classes from "./user-connection-image.module.scss";

const UserConnectionImage = () => {
  return (
    <div className={classes.userImageContainer}>
      <img src="http://www.placecage.com/250/250" width="60" />
    </div>
  );
};

export default UserConnectionImage;
