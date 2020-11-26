import React, { useEffect, useState } from "react";

interface ImageSlidesProps {
  images: string[];
}

const ImageSlides: React.FC<ImageSlidesProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer: number;

    const run = () => {
      setIndex((idx) => idx + 1);
      timer = window.setTimeout(() => {
        run();
      }, 1000);
    };

    timer = window.setTimeout(() => {
      run();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <img src={images[index % images.length]} alt="" />;
};

export { ImageSlides };
