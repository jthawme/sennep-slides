import React from "react";

// import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import Arduino from "../../images/photos/arduino.jpg";
import Geek from "../../images/photos/geek.jpeg";
import Board from "../../images/photos/board.gif";

// import styles from "./LCCSlide.module.scss";

interface LCCSlideProps {}

const LCCSlide: React.FC<LCCSlideProps> = () => {
  // const {} = useMainContext();

  return (
    <SlideMediaTemplate title="LCC - Tech Lab">
      <ImageSlides images={[Arduino, Geek, Board]} />
    </SlideMediaTemplate>
  );
};

export { LCCSlide };
