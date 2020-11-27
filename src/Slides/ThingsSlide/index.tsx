import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ReactComponent as VennSvg } from "../../images/svg/venn.svg";

import styles from "./ThingsSlide.module.scss";
import { DEFAULT_COLORS } from "../../utils/constants";
import { SlideCommon } from "../../components/SlideCommon";

interface ThingsSlideProps {}

const iframes = ["015a", "040", "044", "023", "009", "049", "047", "029"];

const ThingsSlide: React.FC<ThingsSlideProps> = () => {
  const [iframe, setIframe] = useState(iframes[0]);

  return (
    <SlideCommon className={styles.slide}>
      <div className={styles.content}>
        <iframe
          src={`https://jt-sketches.netlify.app/${iframe}/`}
          title="things"
          frameBorder="0"
          allow="camera; microphone"
        />
      </div>
      <div className={styles.choices}>
        {iframes.map((i) => (
          <span
            className={i === iframe ? styles.active : ""}
            onClick={() => setIframe(i)}
            key={i}
          >
            {i}
          </span>
        ))}
      </div>
    </SlideCommon>
  );
};

export { ThingsSlide };
