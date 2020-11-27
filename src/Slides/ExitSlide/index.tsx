import React from "react";

import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";

interface ExitSlideProps {}

const ExitSlide: React.FC<ExitSlideProps> = () => {
  return (
    <SlideTitleTemplate
      title="Thanks!"
      subtitle="jthaw.me / @jthawme"
      metaTitle="Feel free to contact – hi@jthaw.me"
    >
      {/* <span>Slide 1</span> */}
    </SlideTitleTemplate>
  );
};

export { ExitSlide };
