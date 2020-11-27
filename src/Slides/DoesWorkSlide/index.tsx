import React, { useEffect, useState } from "react";

import { SlideQuestionTemplate } from "../../components/SlideQuestionTemplate";

interface DoesWorkSlideProps {}

const DoesWorkSlide: React.FC<DoesWorkSlideProps> = () => {
  return <SlideQuestionTemplate title="Is it working?" one="Yes" two="No" />;
};

export { DoesWorkSlide };
