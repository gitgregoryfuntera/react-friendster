import React from "react";
import UserConnectionImage from "../user-connection-image/user-connection-image.component";
import classes from "./user-connections.module.scss";
const UserConnections = () => {
  return (
    <div className={classes.userConnectionsContainer}>
      <div className={classes.title}>
        <h4>Your Connection</h4>
        <span>See All</span>
      </div>
      <div className={classes.connections}>
        <UserConnectionImage />
        <UserConnectionImage />
        <UserConnectionImage />
        <UserConnectionImage />
        <UserConnectionImage />
        <UserConnectionImage />
      </div>
    </div>
  );
};

export default UserConnections;
