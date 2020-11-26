import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";

import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";
import styles from "./TalkIntroSlide.module.scss";

interface TalkIntroSlideProps {}

const TalkIntroSlide: React.FC<TalkIntroSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideTitleTemplate
      metaTitle="My Talk today"
      title="Where I went along the way"
    />
  );
};

export { TalkIntroSlide };
