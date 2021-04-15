import React from "react";
import { Bouncer } from "../../components/Bouncer";
import { SlideCommon } from "../../components/SlideCommon";

import styles from "./IntroSlide.module.scss";
interface IntroSlideProps {}

const IntroSlide: React.FC<IntroSlideProps> = () => {
  return (
    <SlideCommon className={styles.slide}>
      <Bouncer />
    </SlideCommon>
  );
};

export { IntroSlide };
