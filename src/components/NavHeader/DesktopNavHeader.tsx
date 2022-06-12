import React from "react";
import classes from "./styles.module.scss";
import { FaUserFriends } from "react-icons/fa";

const DesktopNavHeader = () => {
  return (
    <>
      <div className={classes.logoContainer}>
        <h1>React Friendster</h1>
        <span>
          <FaUserFriends size={30} id={classes.logo} />
        </span>
      </div>
      <div className={classes.navActionsContainer}>
        <a href="/html/">HTML</a> |<a href="/css/">CSS</a> |
        <a href="/js/">JavaScript</a>
      </div>
    </>
  );
};

export default DesktopNavHeader;
