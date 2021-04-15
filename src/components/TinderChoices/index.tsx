import classNames from "classnames";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import uniqid from "uniqid";

import { randomArr } from "../../utils/utils";

import { ReactComponent as CloseSvg } from "../../images/svg/close.svg";
import { ReactComponent as HeartSvg } from "../../images/svg/heart.svg";

import styles from "./TinderChoices.module.scss";

const ANALOG_GIFS = [
  "https://media.giphy.com/media/d31vTpVi1LAcDvdm/source.gif",
  "https://media.giphy.com/media/OAup2KSbU4dOM/giphy.gif",
  "https://media.giphy.com/media/Ecd9JDAYKosyQ/giphy.gif",
];

const DIGITAL_GIFS = [
  "https://media.giphy.com/media/kE6xCyOOHoxlS/source.gif",
  "https://media.giphy.com/media/9PgAfl59IHVG8S4kLd/giphy.gif",
  "https://media.giphy.com/media/TuGlTilzrqtJ5wxydr/giphy-downsized-large.gif",
];

const ANALOG_CHOICE = () => ({
  id: uniqid(),
  image: randomArr(ANALOG_GIFS),
  title: "Analog",
  subtitle: "Tactile, tangible & down to party",
});

const DIGITAL_CHOICE = () => ({
  id: uniqid(),
  image: randomArr(DIGITAL_GIFS),
  title: "Digital",
  subtitle: "Brainy & better than you",
});

const TinderChoices: React.FC = () => {
  const [choices, setChoices] = useState([
    ANALOG_CHOICE(),
    DIGITAL_CHOICE(),
    ANALOG_CHOICE(),
    DIGITAL_CHOICE(),
  ]);

  const onCardLeftScreen = (myIdentifier: any) => {
    setChoices((c) => {
      const a = c.slice();
      a.splice(
        c.findIndex((i) => i.id === myIdentifier),
        1
      );
      a.unshift(Math.random() > 0.5 ? ANALOG_CHOICE() : DIGITAL_CHOICE());
      return a;
    });
  };

  return (
    <>
      <div className={styles.container}>
        {choices.map((c, index) => (
          <TinderCard
            key={c.id}
            onCardLeftScreen={() => onCardLeftScreen(c.id)}
            preventSwipe={["up", "down"]}
          >
            <div
              className={classNames(styles.card, styles[`card${index + 1}`])}
              style={{
                backgroundImage: `url(${c.image})`,
              }}
            >
              <div className={styles.cardInfo}>
                <p className={styles.title}>{c.title}</p>
                <p className={styles.subtitle}>{c.subtitle}</p>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className={styles.actions}>
        <div className={styles.btn}>
          <CloseSvg />
        </div>
        <div className={styles.btn}>
          <HeartSvg />
        </div>
      </div>
    </>
  );
};

export { TinderChoices };
