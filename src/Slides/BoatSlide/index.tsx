import React from "react";

// import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import BoatApple from "../../images/photos/boat-mag.jpeg";
import BoatAppleGif from "../../images/photos/boat-apple.gif";
import Boat from "../../images/photos/boat.png";
import BoatMag from "../../images/photos/boatmags.jpg";

// import styles from "./BoatSlide.module.scss";

interface BoatSlideProps {}

const BoatSlide: React.FC<BoatSlideProps> = () => {
  // const {} = useMainContext();

  return (
    <SlideMediaTemplate title="She Was Only – Boat Magazine">
      <ImageSlides images={[BoatApple, Boat, BoatAppleGif, BoatMag]} />
    </SlideMediaTemplate>
  );
};

export { BoatSlide };
