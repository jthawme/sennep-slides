import React from "react";

import styles from "./MeSlide.module.scss";
import MeImg from "../../images/photos/meballoonsname.jpg";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { SlideCommon } from "../../components/SlideCommon";
import { TinderChoices } from "../../components/TinderChoices";

interface TinderSlideProps {}

const NOTES = `These starcrossed lovers, will form a lot of my talk`;

const TinderSlide: React.FC<TinderSlideProps> = () => {
  return (
    <SlideCommon notes={NOTES} className={styles.slide}>
      <TinderChoices />
    </SlideCommon>
  );
};

export { TinderSlide };
