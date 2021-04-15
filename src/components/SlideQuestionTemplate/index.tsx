import React, { useCallback, useMemo } from "react";
import classNames from "classnames";
import { Title } from "../Title";
import { SlideCommon, SlideCommonProps } from "../SlideCommon";

import styles from "./SlideQuestionTemplate.module.scss";
import { UserPress, useUserPress } from "../UserPressFeedback";
import { EphemeralPress } from "../EphemeralPress";
import { StandardPress } from "../StandardPress";

interface SlideQuestionTemplateProps extends SlideCommonProps {
  one: string;
  two: string;
  oneIcon?: string;
  twoIcon?: string;
  title: string;
  smallIcon?: boolean;
  iconLife?: number;
  graphs?: boolean;
}

const SlideQuestionTemplate: React.FC<SlideQuestionTemplateProps> = ({
  title,
  one,
  oneIcon,
  two,
  twoIcon,
  className,
  smallIcon = false,
  iconLife = 1000,
  graphs,
  ...props
}) => {
  const { presses, onRemove } = useUserPress();

  const percentages = useMemo(() => {
    const left = presses.filter((item) => item.x < 0.5);

    return {
      left: presses.length ? left.length / presses.length : 0,
      right: presses.length
        ? (presses.length - left.length) / presses.length
        : 0,
    };
  }, [presses]);

  const getIcon = useCallback(
    (item: UserPress) => {
      if (item.x < 0.5 && oneIcon) {
        return oneIcon;
      }
      if (item.x >= 0.5 && twoIcon) {
        return twoIcon;
      }

      return item.icon;
    },
    [oneIcon, twoIcon]
  );

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

      {presses.map((item) => (
        <EphemeralPress
          key={item.id}
          id={item.id}
          onEnd={() => onRemove(item.id)}
          life={iconLife}
        >
          <StandardPress
            {...item}
            size={smallIcon ? 16 : 48}
            icon={getIcon(item)}
          />
        </EphemeralPress>
      ))}

      {graphs && (
        <>
          <div
            className={classNames(styles.circle, styles.one)}
            style={{ "--size": percentages.left } as React.CSSProperties}
          />
          <div
            className={classNames(styles.circle, styles.two)}
            style={{ "--size": percentages.right } as React.CSSProperties}
          />
        </>
      )}
    </SlideCommon>
  );
};

export { SlideQuestionTemplate };
