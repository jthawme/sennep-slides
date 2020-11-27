import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ReactComponent as ItsOkaySvg } from "../../images/svg/okay.svg";

import styles from "./ItsOkaySlide.module.scss";

interface ItsOkaySlideProps {}

const ItsOkaySlide: React.FC<ItsOkaySlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideMediaTemplate>
      <ItsOkaySvg />
    </SlideMediaTemplate>
  );
};

export { ItsOkaySlide };
