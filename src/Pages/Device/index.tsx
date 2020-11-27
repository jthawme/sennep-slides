import React, { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import { CirclePicker } from "react-color";

import styles from "./DevicePage.module.scss";
import { addEvent, DBEventType } from "../../utils/db";
import { UserPress, UserPressIcon } from "../../components/UserPressFeedback";
import { getIcon } from "../../components/UserPressFeedback/UserPressItem";
import { DEFAULT_COLOR, DEFAULT_COLORS } from "../../utils/constants";
import { Title } from "../../components/Title";

const normalizePosition = (e: React.MouseEvent | React.TouchEvent) => {
  if ("touches" in e) {
    return {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }

  return {
    x: e.clientX,
    y: e.clientY,
  };
};

const iconList: UserPressIcon[] = [
  "smile",
  "target",
  "tv",
  "dribbble",
  "heart",
];

const DevicePage = () => {
  const timerRef = useRef(0);
  const disabledRef = useRef(false);
  const [icon, setIcon] = useState<UserPressIcon>("smile");
  const [color, setColor] = useState<string>(DEFAULT_COLOR.TWO);
  const [pos, setPos] = useState<UserPress | false>(false);

  const onSlideClick = useCallback(
    (e) => {
      if (!disabledRef.current) {
        disabledRef.current = true;

        const position = normalizePosition(e);
        const top = e.target.offsetTop;
        const left = e.target.offsetLeft;

        const divX = position.x - left;
        const divY = position.y - top;

        const { width, height } = e.target.getBoundingClientRect();

        const percX = divX / width;
        const percY = divY / height;

        timerRef.current = window.setTimeout(() => {
          setPos({
            x: percX,
            y: percY,
          });

          addEvent(DBEventType.Location, {
            x: percX,
            y: percY,
            icon,
            color,
          }).then(() => {
            disabledRef.current = false;
          });
        }, 100);
      }
    },
    [color, icon]
  );

  return (
    <main className={styles.main}>
      <div className={styles.slide} onClick={onSlideClick}>
        {pos && (
          <span
            className={styles.slideEl}
            style={
              { "--pos-x": pos.x, "--pos-y": pos.y } as React.CSSProperties
            }
          />
        )}
        <p>Click anyway in here</p>
      </div>

      <Title size="small" className={styles.title}>
        Icons
      </Title>
      <div className={styles.icons}>
        {iconList.map((i) => (
          <span
            key={i}
            className={classNames(styles.item, { [styles.active]: icon === i })}
            onClick={() => setIcon(i)}
          >
            {getIcon(i)}
          </span>
        ))}
      </div>

      <Title size="small" className={styles.title}>
        Colours
      </Title>
      <div className={styles.color}>
        <CirclePicker
          colors={DEFAULT_COLORS}
          color={color}
          onChangeComplete={(c) => setColor(c.hex)}
        />
      </div>
    </main>
  );
};

export { DevicePage };
