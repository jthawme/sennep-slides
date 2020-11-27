import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";

import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";

interface UniqueSlideProps {}

const UniqueSlide: React.FC<UniqueSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideTitleTemplate
      metaTitle="Code can include viewers"
      title="It makes for unique experiences"
    />
  );
};

export { UniqueSlide };
