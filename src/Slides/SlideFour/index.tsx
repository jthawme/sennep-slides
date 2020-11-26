import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import Wheel from "../../images/photos/wheel.jpg";
import Wall from "../../images/photos/wall.jpg";
import TrigDevil from "../../images/photos/trigdevil.jpeg";
import ScreenBottles from "../../images/photos/screenbottles.jpg";
import Prints from "../../images/photos/prints.jpg";
import Nice from "../../images/photos/nice.jpg";

import styles from "./SlideFour.module.scss";

interface SlideFourProps {}

const SlideFour: React.FC<SlideFourProps> = () => {
  const {} = useMainContext();

  return (
    <SlideMediaTemplate title="Personal Practice">
      <ImageSlides
        images={[Wheel, Wall, TrigDevil, ScreenBottles, Prints, Nice]}
      />
    </SlideMediaTemplate>
  );
};

export { SlideFour };
