import React from "react";
import classNames from "classnames";

import styles from "./SlideCommon.module.scss";

export interface SlideCommonProps {
  className?: string;
}

const SlideCommon: React.FC<SlideCommonProps> = ({ className, children }) => {
  return <div className={classNames(styles.slide, className)}>{children}</div>;
};

export { SlideCommon };
