import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";

import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";
import styles from "./SoWhatSlide.module.scss";

interface SoWhatSlideProps {}

const SoWhatSlide: React.FC<SoWhatSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideTitleTemplate
      metaTitle="Thats great and everything, but..."
      title="So What?"
    />
  );
};

export { SoWhatSlide };
