import React from "react";

import styles from "./InteractionSlide.module.scss";
import { SlideMediaTemplate } from "../../components/SlideMediaTemplate";
import { SlideTitleTemplate } from "../../components/SlideTitleTemplate";
import { useMainContext } from "../../components/MainContext";
import { useUserPress } from "../../components/UserPressFeedback";
import { EphemeralPress } from "../../components/EphemeralPress";
import { StandardPress } from "../../components/StandardPress";

interface InteractionSlideProps {}

const NOTES = `Technology gives light to some very interesting interactions`;

const InteractionSlide: React.FC<InteractionSlideProps> = () => {
  const { usersCount } = useMainContext();
  const { presses, onRemove } = useUserPress();

  return (
    <SlideTitleTemplate
      notes={NOTES}
      title="Interact with me"
      subtitle="bit.ly/jt-sennep"
      metaTitle={usersCount > 0 ? `👀 ${usersCount} people 👀` : undefined}
    >
      {presses.map((item) => (
        <EphemeralPress
          key={item.id}
          id={item.id}
          onEnd={() => onRemove(item.id)}
          life={1000}
        >
          <StandardPress {...item} />
        </EphemeralPress>
      ))}
    </SlideTitleTemplate>
  );
};

export { InteractionSlide };
