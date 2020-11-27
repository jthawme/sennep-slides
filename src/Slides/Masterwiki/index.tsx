import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import MW from "../../images/video/masterwiki.mp4";

interface MasterWikiSlideProps {}

const MasterWikiSlide: React.FC<MasterWikiSlideProps> = () => {
  return (
    <SlideMediaTemplate title="masterwiki.how">
      <video src={MW} autoPlay muted loop />
    </SlideMediaTemplate>
  );
};

export { MasterWikiSlide };
