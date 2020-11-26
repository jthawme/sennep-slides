import React from "react";
import classNames from "classnames";
import { Title } from "../Title";
import { SlideCommon, SlideCommonProps } from "../SlideCommon";

import styles from "./SlideMediaTemplate.module.scss";

interface SlideMediaTemplateProps extends SlideCommonProps {
  title?: string;
}

const SlideMediaTemplate: React.FC<SlideMediaTemplateProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <SlideCommon className={classNames(styles.slide, className)} {...props}>
      <div className={styles.title}>
        {title && (
          <Title size="normal" className={styles.titleEl}>
            {title}
          </Title>
        )}
      </div>

      <div className={styles.content}>{children}</div>
    </SlideCommon>
  );
};

export { SlideMediaTemplate };
