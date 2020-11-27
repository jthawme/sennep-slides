import React from "react";

// import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import Rca from "../../images/photos/rca.png";
import Richest from "../../images/photos/richestmp.png";
import Afl from "../../images/photos/afl.png";
import Cardvcard from "../../images/photos/cardvcard.png";
import SpottingPlutes from "../../images/photos/spottingplutes.png";
import MasterWiki from "../../images/photos/masterwiki.png";
import Galvin from "../../images/photos/galvin.png";

// import styles from "./FreelanceSlide.module.scss";

interface FreelanceSlideProps {}

const FreelanceSlide: React.FC<FreelanceSlideProps> = () => {
  // const {} = useMainContext();

  return (
    <SlideMediaTemplate title="Freelancing">
      <ImageSlides
        images={[
          Rca,
          Richest,
          Afl,
          Cardvcard,
          SpottingPlutes,
          MasterWiki,
          Galvin,
        ]}
      />
    </SlideMediaTemplate>
  );
};

export { FreelanceSlide };
