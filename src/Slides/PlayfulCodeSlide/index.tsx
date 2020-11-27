import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";

import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";
import styles from "./PlayfulCodeSlide.module.scss";

interface PlayfulCodeSlideProps {}

const PlayfulCodeSlide: React.FC<PlayfulCodeSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideTitleTemplate
      metaTitle="Coding"
      title="Playful interactions"
      subtitle="Moving past the static"
    />
  );
};

export { PlayfulCodeSlide };
