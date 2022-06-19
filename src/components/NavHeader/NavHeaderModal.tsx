import React from "react";
import Portal from "../Layouts/Portal";
import classes from "./NavHeaderModal.module.scss";
import { IoClose } from "react-icons/io5";
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
            CLOSE
            <IoClose />
          </CustomButton>
        </div>

        <ul>
          <li>
            <CustomButton href="/activity">Activity</CustomButton>
          </li>
          <li>
            <CustomButton href="/account">Account</CustomButton>
          </li>
          <li>
            <CustomButton href="/customize">Customize</CustomButton>
          </li>
        </ul>
      </div>
    </Portal>
  );
};

export default NavHeaderModal;
