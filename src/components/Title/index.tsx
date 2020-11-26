import React from "react";
import classNames from "classnames";

import styles from "./Title.module.scss";

interface TitleProps {
  className?: string;
  size?: "small" | "normal" | "large" | "x-large";
  code?: boolean;
  bold?: boolean;
}

const Title: React.FC<TitleProps> = ({
  className,
  children,
  size = "normal",
  code,
  bold,
}) => {
  return (
    <span
      className={classNames(
        styles.title,
        styles[size],
        { [styles.code]: code },
        { [styles.bold]: bold },
        className
      )}
    >
      {children}
    </span>
  );
};

export { Title };
