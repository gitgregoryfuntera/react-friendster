import React from "react";
import classes from "./profile-details.module.scss";

const ProfileDetails = () => {
  return (
    <div className={classes["profileDetailsContainer"]}>
      <div className={classes["detailsContainer"]}>
        <div className={classes["spacer"]}></div>
        <div className={classes["details"]}>
          <div>
            <h4>Name</h4>
            <p>John Doe</p>
          </div>
          <div>
            <h4>Name</h4>
            <p>John Doe</p>
          </div>
          <div>
            <h4>Name</h4>
            <p>John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
