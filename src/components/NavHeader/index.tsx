import React from "react";
import classes from "./styles.module.scss";
import { FaUserFriends } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import MobileNavHeader from "./MobileNavHeader";

const NavHeader = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  if (isTabletOrMobile) {
    return (
      <nav className={classes.navigationContainer}>
        <MobileNavHeader />
      </nav>
    );
  }
  return (
    <nav className={classes.navigationContainer}>
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
    </nav>
  );
};

export default NavHeader;
