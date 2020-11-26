import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import GifMaker from "../../images/photos/google-gif-maker.png";
import Rca from "../../images/photos/rca.png";
import RichestMp from "../../images/photos/richestmp.png";
import MasterWiki from "../../images/photos/masterwiki.png";
import YoutubeAds from "../../images/photos/youtubeads.png";
import Boat from "../../images/photos/boat.png";
import Galvin from "../../images/photos/galvin.png";

import styles from "./SlideThree.module.scss";

interface SlideThreeProps {}

const SlideThree: React.FC<SlideThreeProps> = () => {
  const {} = useMainContext();

  return (
    <SlideMediaTemplate title="Professional Work">
      <ImageSlides
        images={[
          GifMaker,
          Rca,
          RichestMp,
          MasterWiki,
          YoutubeAds,
          Boat,
          Galvin,
        ]}
      />
    </SlideMediaTemplate>
  );
};

export { SlideThree };
