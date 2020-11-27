import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import Kinegram from "../../images/video/kinegram.mp4";

interface KinegramSlideProps {}

const KinegramSlide: React.FC<KinegramSlideProps> = () => {
  return (
    <SlideMediaTemplate title="kinegram.app">
      <video src={Kinegram} autoPlay muted loop />
    </SlideMediaTemplate>
  );
};

export { KinegramSlide };
