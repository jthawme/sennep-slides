import React, { useEffect, useState } from "react";

import { SlideQuestionTemplate } from "../../components/SlideQuestionTemplate";

interface LoveDesignProps {}

const LoveDesign: React.FC<LoveDesignProps> = () => {
  return (
    <SlideQuestionTemplate
      title="Do you love Graphic Design?"
      one="👍"
      two="👎"
    />
  );
};

export { LoveDesign };
