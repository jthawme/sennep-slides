import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";

import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";

interface LinkSlideProps {}

const LinkSlide: React.FC<LinkSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideTitleTemplate
      metaTitle="Go to this link"
      title="bit.ly/jt-gmd"
      subtitle="Phone / Laptop"
    />
  );
};

export { LinkSlide };
