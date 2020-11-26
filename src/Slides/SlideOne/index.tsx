import React, { useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideCommon } from "../../components/SlideCommon";

import styles from "./SlideOne.module.scss";

interface SlideOneProps {}

const SlideOne: React.FC<SlideOneProps> = () => {
  const { addActions } = useMainContext();

  // const [state, setState] = useState(0);

  return (
    <SlideCommon>
      <span>Slide 1</span>
    </SlideCommon>
  );
};

export { SlideOne };
