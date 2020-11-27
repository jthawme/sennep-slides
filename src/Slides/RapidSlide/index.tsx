import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";

import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";

interface RapidSlideProps {}

const RapidSlide: React.FC<RapidSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideTitleTemplate
      metaTitle="Code can prototype"
      title="It can be quick to make things"
    />
  );
};

export { RapidSlide };
