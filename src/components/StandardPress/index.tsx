import React from "react";
import { UserPress } from "../UserPressFeedback";

import styles from "./StandardPress.module.scss";

interface StandardPressProps extends UserPress {
  size?: number;
}

const StandardPress: React.FC<StandardPressProps> = ({
  x,
  y,
  icon,
  color,
  size = 48,
}) => {
  return (
    <div
      className={styles.item}
      style={
        { "--x-pos": x, "--y-pos": y, "--size": size } as React.CSSProperties
      }
    >
      {icon}
    </div>
  );
};

export { StandardPress };
