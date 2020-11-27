import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ReactComponent as VennSvg } from "../../images/svg/venn.svg";

import styles from "./DynamicSlide.module.scss";
import { DEFAULT_COLORS } from "../../utils/constants";
import { SlideCommon } from "../../components/SlideCommon";

interface DynamicSlideProps {}

const DynamicSlide: React.FC<DynamicSlideProps> = () => {
  const { setColorTwo, setColorOne } = useMainContext();
  const [which, setWhich] = useState("one");

  return (
    <SlideCommon className={styles.tiles}>
      <div
        className={styles.actions}
        onClick={() => setWhich(which === "one" ? "two" : "one")}
      >
        Set {which === "one" ? "foreground" : "background"} colour
      </div>
      {DEFAULT_COLORS.map((c) => (
        <div
          className={styles.tile}
          style={{ backgroundColor: c }}
          onClick={() => (which === "one" ? setColorTwo(c) : setColorOne(c))}
          key={c}
        />
      ))}
    </SlideCommon>
  );
};

export { DynamicSlide };
