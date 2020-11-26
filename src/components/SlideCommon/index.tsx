import React from "react";
import classNames from "classnames";

import styles from "./SlideCommon.module.scss";
import { useMainContext } from "../MainContext";

interface SlideCommonProps {
  className?: string;
}

const SlideCommon: React.FC<SlideCommonProps> = ({ className, children }) => {
  const { pageNumber } = useMainContext();

  return (
    <div className={classNames(styles.slide, className)}>
      {children}

      <footer className={styles.footer}>{pageNumber} / 10</footer>
    </div>
  );
};

export { SlideCommon };
