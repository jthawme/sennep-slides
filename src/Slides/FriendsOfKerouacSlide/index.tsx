import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useMainContext } from "../../components/MainContext";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { ImageSlides } from "../../components/ImageSlides";

import FOK from "../../images/video/fok.mp4";

import styles from "./FriendsOfKerouacSlide.module.scss";

interface FriendsOfKerouacSlideProps {}

const FriendsOfKerouacSlide: React.FC<FriendsOfKerouacSlideProps> = () => {
  return (
    <SlideMediaTemplate title="friendsofkerouac.com">
      <video src={FOK} autoPlay muted loop />
    </SlideMediaTemplate>
  );
};

export { FriendsOfKerouacSlide };
