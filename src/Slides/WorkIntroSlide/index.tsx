import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";

import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";

interface WorkIntroSlideProps {}

const WorkIntroSlide: React.FC<WorkIntroSlideProps> = () => {
  const {} = useMainContext();

  return (
    <SlideTitleTemplate
      metaTitle="Finally"
      title="Some projects"
      subtitle="Case Studies"
    />
  );
};

export { WorkIntroSlide };
