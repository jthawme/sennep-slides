import React from "react";
import classNames from "classnames";
import { Title } from "../Title";
import { SlideCommon, SlideCommonProps } from "../SlideCommon";

import styles from "./SlideTitleTemplate.module.scss";

interface SlideTitleTemplateProps extends SlideCommonProps {
  subtitle?: string;
  title: string;
  metaTitle?: string;
}

const SlideTitleTemplate: React.FC<SlideTitleTemplateProps> = ({
  subtitle,
  metaTitle,
  title,
  children,
  className,
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
    </SlideCommon>
  );
};

export { SlideTitleTemplate };
