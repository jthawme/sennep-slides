import React from "react";

import styles from "./MeSlide.module.scss";
import MeImg from "../../images/photos/meballoonsname.jpg";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";

interface MeSlideProps {}

const NOTES = `Creative technologist, but can take or leave the technologist`;

const MeSlide: React.FC<MeSlideProps> = () => {
  return (
    <SlideMediaTemplate notes={NOTES} media={MeImg} className={styles.slide} />
  );
};

export { MeSlide };
