import React, { useState } from "react";
import classes from "./styles.module.scss";
import { FaUserFriends, FaBars } from "react-icons/fa";
const MobileNavHeader = () => {
  const [isMenuExpanded , setIsMenuExpanded] = useState(false);

  const toggleMenu = () => {
    if (!isMenuExpanded) {
      setIsMenuExpanded(true);
      console.log("🚀 ~ file: MobileNavHeader.tsx ~ line 10 ~ toggleMenu ~ isMenuExpanded", isMenuExpanded);
    } else {
      setIsMenuExpanded(false);
      console.log("🚀 ~ file: MobileNavHeader.tsx ~ line 13 ~ toggleMenu ~ isMenuExpanded", isMenuExpanded);
    }
  };
  return (
    <>
      <div className={classes.logoContainer}>
        <div className={classes.navLogoContainerMobile}>
          <FaUserFriends size={30} id={classes.logo} />
        </div>
      </div>
      <div className={classes.navActionContainerMobile}>
        <button type="button" onClick={toggleMenu}>
          <FaBars size={30} />
        </button>
      </div>
    </>
  );
};

export default MobileNavHeader;
