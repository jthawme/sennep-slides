import React from "react";

import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";

interface IntroSlideProps {}

const IntroSlide: React.FC<IntroSlideProps> = () => {
  return (
    <SlideTitleTemplate
      title="Jonny Thaw"
      subtitle="Creative Coder"
      metaTitle="GMD Talk – Nov 2020"
    >
      {/* <span>Slide 1</span> */}
    </SlideTitleTemplate>
  );
};

export { IntroSlide };
