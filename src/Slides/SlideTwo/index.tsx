import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ReactComponent as VennSvg } from "../../images/svg/venn.svg";

import styles from "./SlideTwo.module.scss";

interface SlideTwoProps {}

const SlideTwo: React.FC<SlideTwoProps> = () => {
  const {} = useMainContext();

  return (
    <SlideMediaTemplate title="Creative Technologist">
      <VennSvg />
    </SlideMediaTemplate>
  );
};

export { SlideTwo };
