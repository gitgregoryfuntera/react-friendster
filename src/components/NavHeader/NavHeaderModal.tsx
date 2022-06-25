import React from "react";
import Portal from "../Layouts/Portal";
import classes from "./NavHeaderModal.module.scss";
import { IoClose, IoPersonSharp, IoAnalytics, IoBuild } from "react-icons/io5";
import CustomButton from "../CustomButton";
type NavHeaderModalProps = {
  show: boolean;
  toggleMenu: () => void;
};

const NavHeaderModal = ({ show, toggleMenu }: NavHeaderModalProps) => {
  if (!show) {
    return <></>;
  }
  return (
    <Portal>
      <div className={classes.container}>
        <div className={classes.closeBtnContainer}>
          <CustomButton onClick={toggleMenu}>
            <IoClose />
          </CustomButton>
        </div>

        <ul className={classes.navLinksContainer}>
          <li>
            <CustomButton href="/activity" className={classes.navLink}>
              Activity{" "}
              <span>
                <IoAnalytics />
              </span>
            </CustomButton>
          </li>
          <li>
            <CustomButton href="/account" className={classes.navLink}>
              Account{" "}
              <span>
                <IoPersonSharp width={100} height={100}/>
              </span>
            </CustomButton>
          </li>
          <li>
            <CustomButton href="/customize" className={classes.navLink}>
              Customize{" "}
              <span>
                <IoBuild />
              </span>
            </CustomButton>
          </li>
        </ul>
      </div>
    </Portal>
  );
};

export default NavHeaderModal;
