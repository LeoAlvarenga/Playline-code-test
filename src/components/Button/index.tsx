import React, { ButtonHTMLAttributes, ReactComponentElement, ReactElement } from "react";

import s from "./style.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement;
}

const Button: React.FC<ButtonProps> = ({ children, icon, ...rest }) => {
  return (
    <button className={s.button} {...rest}>
      {icon && (
        <div className={s["button__icon"]}>
          {icon}
        </div>
      )}
      <p>{children}</p>
    </button>
  );
};

export default Button;
