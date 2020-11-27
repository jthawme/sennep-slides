import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";

import Letters from "../../images/video/twitter.mp4";

interface PrototypeSlideProps {}

const PrototypeSlide: React.FC<PrototypeSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideMediaTemplate title="Prototyping tool">
      <video src={Letters} autoPlay muted loop />
    </SlideMediaTemplate>
  );
};

export { PrototypeSlide };
