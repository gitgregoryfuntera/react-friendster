import React from "react";
import Portal from "../Layouts/Portal";
import classes from "./NavHeaderModal.module.scss";

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
        Hello World
        <button onClick={toggleMenu}>close</button>
      </div>
    </Portal>
  );
};

export default NavHeaderModal;
