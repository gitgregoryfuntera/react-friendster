import React from "react";
import classes from "./styles.module.scss";

type CustomButtonProps = {
  children: React.ReactNode;
  href?: string | null;
  buttonType?: string;
  onClick?: () => void;
};

const CustomButton = ({
  children,
  buttonType = "",
  href,
  ...rest
}: CustomButtonProps): JSX.Element => {
  if (href) {
    return (
      <div>
        <a>{children}</a>
      </div>
    );
  }
  return (
    <div className={`${classes.customButton}`}>
      <button className={classes[buttonType]} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
