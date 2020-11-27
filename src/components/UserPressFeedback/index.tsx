import React, { useCallback, useEffect, useState } from "react";
import { DBEventType, listenForEvents } from "../../utils/db";
import uniqid from "uniqid";
import { UserPressItem } from "./UserPressItem";

export type UserPressIcon = "smile" | "target" | "tv" | "dribbble" | "heart";

export type UserPress = {
  x: number;
  y: number;
  icon?: UserPressIcon;
  color?: string;
};

export type UserPressObj = {
  id: string;
} & UserPress;

interface UserPressFeedbackProps {}

const UserPressFeedback: React.FC<UserPressFeedbackProps> = () => {
  const [presses, setPresses] = useState<UserPressObj[]>([]);

  useEffect(() => {
    listenForEvents((obj) => {
      if (obj.type === DBEventType.Location) {
        setPresses((curr) => {
          const idx = curr.findIndex((i) => i.id === obj.timestamp.toString());

          if (idx >= 0) {
            return curr;
          }

          return [
            ...curr,
            {
              ...obj.value,
              id: obj.timestamp.toString(),
            },
          ];
        });
      }
    });
  }, []);

  const onEnd = useCallback((id: string) => {
    setPresses((curr) => {
      const c = curr.slice();

      const idx = c.findIndex((i) => i.id === id);

      if (idx >= 0) {
        c.splice(idx, 1);
      }

      return c;
    });
  }, []);

  // console.log(presses);

  return (
    <>
      {presses.map((item) => (
        <UserPressItem {...item} key={item.id} onEnd={onEnd} />
      ))}
    </>
  );
};

export { UserPressFeedback };
