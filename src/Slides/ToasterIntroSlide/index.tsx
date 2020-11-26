import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import Resonate from "../../images/photos/resonate.jpg";
import Google1 from "../../images/photos/google.jpg";
import Google2 from "../../images/photos/google2.jpg";
import Google3 from "../../images/photos/google3.jpg";
import Brighton from "../../images/photos/brighton.jpg";

import styles from "./ToasterIntroSlide.module.scss";

interface ToasterIntroSlideProps {}

const ToasterIntroSlide: React.FC<ToasterIntroSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideMediaTemplate title="Toaster / Google">
      <ImageSlides images={[Google1, Resonate, Google2, Google3, Brighton]} />
    </SlideMediaTemplate>
  );
};

export { ToasterIntroSlide };
