import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ReactComponent as VennSvg } from "../../images/svg/venn.svg";

import styles from "./VennSlide.module.scss";

interface VennSlideProps {}

const VennSlide: React.FC<VennSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideMediaTemplate title="Creative Technologist">
      <VennSvg />
    </SlideMediaTemplate>
  );
};

export { VennSlide };
