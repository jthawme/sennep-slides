import React from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideCommon } from "../../components/SlideCommon";

import styles from "./SlideTemplate.module.scss";

interface SlideTemplateProps {}

const SlideTemplate: React.FC<SlideTemplateProps> = () => {
  const {} = useMainContext();

  return (
    <SlideCommon>
      <span>Slide</span>
    </SlideCommon>
  );
};

export { SlideTemplate };
