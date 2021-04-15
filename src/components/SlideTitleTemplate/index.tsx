import React from "react";
import classNames from "classnames";
import { Title } from "../Title";
import { SlideCommon, SlideCommonProps } from "../SlideCommon";

import styles from "./SlideTitleTemplate.module.scss";
import { PressContainer } from "../PressContainer";

interface SlideTitleTemplateProps extends SlideCommonProps {
  subtitle?: string;
  title: string;
  metaTitle?: string;
  withPresses?: boolean;
}

const SlideTitleTemplate: React.FC<SlideTitleTemplateProps> = ({
  subtitle,
  metaTitle,
  title,
  children,
  className,
  withPresses = false,
  ...props
}) => {
  return (
    <SlideCommon className={classNames(styles.slide, className)} {...props}>
      {metaTitle && (
        <Title className={styles.meta} size="small">
          {metaTitle}
        </Title>
      )}

      <div className={styles.content}>
        <Title size="x-large" bold className={styles.title}>
          {title}
        </Title>
        {subtitle && (
          <Title size="normal" className={styles.subtitle}>
            {subtitle}
          </Title>
        )}
      </div>

      {children}

      {withPresses && <PressContainer />}
    </SlideCommon>
  );
};

export { SlideTitleTemplate };
