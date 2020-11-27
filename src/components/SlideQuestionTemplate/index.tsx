import React from "react";
import classNames from "classnames";
import { Title } from "../Title";
import { SlideCommon, SlideCommonProps } from "../SlideCommon";

import styles from "./SlideQuestionTemplate.module.scss";

interface SlideQuestionTemplateProps extends SlideCommonProps {
  one: string;
  two: string;
  title: string;
}

const SlideQuestionTemplate: React.FC<SlideQuestionTemplateProps> = ({
  title,
  one,
  two,
  className,
  ...props
}) => {
  return (
    <SlideCommon className={classNames(styles.slide, className)} {...props}>
      <Title className={styles.title} size="normal">
        {title}
      </Title>

      <Title
        size="large"
        className={classNames(styles.answer, styles.answerOne)}
      >
        {one}
      </Title>
      <Title
        size="large"
        className={classNames(styles.answer, styles.answerTwo)}
      >
        {two}
      </Title>
    </SlideCommon>
  );
};

export { SlideQuestionTemplate };
