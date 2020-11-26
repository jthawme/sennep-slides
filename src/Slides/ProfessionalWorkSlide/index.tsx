import React from "react";

import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import GifMaker from "../../images/photos/google-gif-maker.png";
import Rca from "../../images/photos/rca.png";
import RichestMp from "../../images/photos/richestmp.png";
import MasterWiki from "../../images/photos/masterwiki.png";
import YoutubeAds from "../../images/photos/youtubeads.png";
import Boat from "../../images/photos/boat.png";
import Galvin from "../../images/photos/galvin.png";

interface ProfessionalWorkSlideProps {}

const ProfessionalWorkSlide: React.FC<ProfessionalWorkSlideProps> = () => {
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

export { ProfessionalWorkSlide };
