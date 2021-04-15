import React, { useCallback } from "react";
import classNames from "classnames";
import { Title } from "../Title";
import { SlideCommon, SlideCommonProps } from "../SlideCommon";

import styles from "./SlideMediaTemplate.module.scss";
import { PressContainer } from "../PressContainer";

interface SlideMediaTemplateProps extends SlideCommonProps {
  media: string;
  video?: boolean;
  cover?: boolean;
  big?: boolean;
  attribute?: string;
  withPresses?: boolean;
}

const SlideMediaTemplate: React.FC<SlideMediaTemplateProps> = ({
  children,
  video,
  media,
  className,
  cover = false,
  big = false,
  attribute,
  withPresses = false,
  ...props
}) => {
  const onClick = useCallback((e) => {
    if (e.target.muted) {
      e.target.currentTime = 0;
    }

    e.target.muted = !e.target.muted;
  }, []);

  return (
    <SlideCommon
      className={classNames(
        styles.slide,
        { [styles.cover]: cover, [styles.big]: big },
        className
      )}
      {...props}
    >
      {attribute && <div className={styles.attribution}>{attribute}</div>}
      <div className={styles.content}>
        {video ? (
          <video
            src={media}
            className={styles.media}
            autoPlay
            muted
            loop
            onClick={onClick}
          />
        ) : (
          <img src={media} className={styles.media} alt="" />
        )}
      </div>

      {withPresses && <PressContainer />}
    </SlideCommon>
  );
};

export { SlideMediaTemplate };
