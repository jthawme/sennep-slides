import React, { useEffect, useState } from "react";
import { UserPressIcon, UserPressObj } from ".";
import { DEFAULT_COLOR } from "../../utils/constants";

import { ReactComponent as DribbbleSvg } from "./icons/dribbble.svg";
import { ReactComponent as SmileSvg } from "./icons/smile.svg";
import { ReactComponent as TargetSvg } from "./icons/target.svg";
import { ReactComponent as TvSvg } from "./icons/tv.svg";

import styles from "./UserPressFeedback.module.scss";

interface UserPressItemProps extends UserPressObj {
  onEnd: (id: string) => void;
  alive?: number;
}

export const getIcon = (icon: UserPressIcon) => {
  switch (icon) {
    case "dribbble":
      return <DribbbleSvg />;
    case "target":
      return <TargetSvg />;
    case "tv":
      return <TvSvg />;
    case "smile":
    default:
      return <SmileSvg />;
  }
};

const UserPressItem: React.FC<UserPressItemProps> = ({
  x,
  y,
  id,
  icon = "smile",
  color = DEFAULT_COLOR.TWO,
  onEnd,
  alive = 1500,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnd(id);
    }, alive);

    return () => clearTimeout(timer);
  }, [alive, id, onEnd]);

  return (
    <div
      className={styles.item}
      style={
        {
          "--pos-x": x,
          "--pos-y": y,
          "--pos-color": color,
        } as React.CSSProperties
      }
    >
      {getIcon(icon)}
    </div>
  );
};

export { UserPressItem };
