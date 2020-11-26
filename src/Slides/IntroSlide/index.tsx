import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideCommon } from "../../components/SlideCommon";

import styles from "./IntroSlide.module.scss";
import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";

interface IntroSlideProps {}

const IntroSlide: React.FC<IntroSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideTitleTemplate
      title="Jonny Thaw"
      subtitle="Creative Coder"
      metaTitle="GMD Talk – Nov 2020"
    >
      {/* <span>Slide 1</span> */}
    </SlideTitleTemplate>
  );
};

export { IntroSlide };
