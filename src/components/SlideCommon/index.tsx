import React from "react";
import classNames from "classnames";

import styles from "./SlideCommon.module.scss";
import { useMainContext } from "../MainContext";
import { Markdown } from "../Markdown";

export interface SlideCommonProps {
  className?: string;
  notes?: string;
}

const SlideCommon: React.FC<SlideCommonProps> = ({
  className,
  children,
  notes,
}) => {
  const { debug } = useMainContext();

  return (
    <div className={classNames(styles.slide, className)}>
      {debug && notes && <Markdown className={styles.notes}>{notes}</Markdown>}
      {children}
    </div>
  );
};

export { SlideCommon };
