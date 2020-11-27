import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import CE from "../../images/video/creativeelephant.mp4";

interface CreativeElephantProps {}

const CreativeElephant: React.FC<CreativeElephantProps> = () => {
  return (
    <SlideMediaTemplate title="Creative Elephant">
      <video src={CE} autoPlay muted loop />
    </SlideMediaTemplate>
  );
};

export { CreativeElephant };
