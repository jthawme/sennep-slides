import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import SWO from "../../images/video/shewasonly.mp4";

import styles from "./SwoSlide.module.scss";

interface SwoSlideProps {}

const SwoSlide: React.FC<SwoSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideMediaTemplate title="She Was Only">
      <video src={SWO} autoPlay muted loop />
    </SlideMediaTemplate>
  );
};

export { SwoSlide };
