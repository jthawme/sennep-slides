import React, { useEffect, useRef, useState } from "react";

import * as tome from "chromotome";
import { ReactComponent as JTDvd } from "../../images/svg/jt-dvd.svg";

import { useWindowDimensions } from "../../utils/hooks/windowDimensions";
import { randomArr } from "../../utils/utils";
import styles from "./Bouncer.module.scss";

const getRandomColor = () => {
  const palette = tome.getRandom();

  return randomArr(palette.colors);
};

const Bouncer = () => {
  const { width, height } = useWindowDimensions();
  const [color, setColor] = useState(getRandomColor());
  const dvdRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const accelerationRef = useRef<{ x: number; y: number }>({
    x: Math.random() + 1,
    y: Math.random() + 1,
  });
  const widthRef = useRef(0);
  const heightRef = useRef(0);

  useEffect(() => {
    widthRef.current = width || 0;
    heightRef.current = height || 0;
  }, [width, height]);

  useEffect(() => {
    const update = () => {
      if (!heightRef.current || !widthRef.current) {
        requestAnimationFrame(update);
        return;
      }

      positionRef.current.x += accelerationRef.current.x;
      positionRef.current.y += accelerationRef.current.y;

      if (positionRef.current.y + 151 > (heightRef.current || 0)) {
        accelerationRef.current.y = accelerationRef.current.y * -1;
        setColor(getRandomColor());
      }
      if (positionRef.current.x + 200 > (widthRef.current || 0)) {
        accelerationRef.current.x = accelerationRef.current.x * -1;
        setColor(getRandomColor());
      }
      if (positionRef.current.y < 0) {
        accelerationRef.current.y = accelerationRef.current.y * -1;
        setColor(getRandomColor());
      }
      if (positionRef.current.x < 0) {
        accelerationRef.current.x = accelerationRef.current.x * -1;
        setColor(getRandomColor());
      }

      if (dvdRef.current) {
        dvdRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, []);

  return (
    <div ref={dvdRef} className={styles.logo} style={{ color }}>
      <JTDvd />
    </div>
  );
};

export { Bouncer };
