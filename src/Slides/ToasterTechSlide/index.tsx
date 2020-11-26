import React from "react";

// import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import AR from "../../images/photos/ar.gif";
import Jukebox from "../../images/photos/jukebox.webp";
import Petsu from "../../images/photos/petsu.jpg";
import Sweepstakes from "../../images/photos/sweepstakes1.webp";
import Jaws from "../../images/photos/jaws.jpg";

// import styles from "./ToasterTechSlide.module.scss";

interface ToasterTechSlideProps {}

const ToasterTechSlide: React.FC<ToasterTechSlideProps> = () => {
  // const {} = useMainContext();

  return (
    <SlideMediaTemplate title="Toaster – Technology">
      <ImageSlides images={[AR, Jukebox, Petsu, Sweepstakes, Jaws]} />
    </SlideMediaTemplate>
  );
};

export { ToasterTechSlide };
