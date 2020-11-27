import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import Drums1 from "../../images/photos/drums1.jpg";
import Drums2 from "../../images/photos/drums2.jpg";
import Drums3 from "../../images/photos/drums3.jpg";
import Drums4 from "../../images/photos/drums4.jpg";
import Drums5 from "../../images/photos/drums5.jpg";
import Drums6 from "../../images/photos/drums6.jpg";
import Drums7 from "../../images/photos/drums7.jpg";
import Drums8 from "../../images/photos/drums8.jpg";

interface DrumGeneratesSlideProps {}

const DrumGeneratesSlide: React.FC<DrumGeneratesSlideProps> = () => {
  return (
    <SlideMediaTemplate title="Drum Generates">
      <ImageSlides
        images={[
          Drums1,
          Drums2,
          Drums3,
          Drums4,
          Drums5,
          Drums6,
          Drums7,
          Drums8,
        ]}
      />
    </SlideMediaTemplate>
  );
};

export { DrumGeneratesSlide };
