import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import Epsom from "../../images/photos/epsom.jpg";

import styles from "./UcaSlide.module.scss";
import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";

interface UcaSlideProps {}

const UcaSlide: React.FC<UcaSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideMediaTemplate title="UCA Epsom">
      <img src={Epsom} alt="" />
    </SlideMediaTemplate>
  );
};

export { UcaSlide };
