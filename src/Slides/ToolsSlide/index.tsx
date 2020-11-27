import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";

import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";

interface ToolsSlideProps {}

const ToolsSlide: React.FC<ToolsSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideTitleTemplate metaTitle="Very bespoke" title="Tools for your needs" />
  );
};

export { ToolsSlide };
