import React from "react";

// import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import InternMag4 from "../../images/photos/intern-mag-4.jpg";
import InternSite from "../../images/photos/intern-site.png";
import InternLaunch from "../../images/photos/intern3.jpg";

// import styles from "./InternSlide.module.scss";

interface InternSlideProps {}

const InternSlide: React.FC<InternSlideProps> = () => {
  // const {} = useMainContext();

  return (
    <SlideMediaTemplate title="She Was Only – Intern Magazine">
      <ImageSlides images={[InternMag4, InternLaunch, InternSite]} />
    </SlideMediaTemplate>
  );
};

export { InternSlide };
