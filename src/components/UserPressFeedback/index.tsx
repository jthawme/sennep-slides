import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import uniqid from "uniqid";
import { DBEventType, listenForEvents } from "../../utils/db";

export type UserPressIcon = "smile" | "target" | "tv" | "dribbble" | "heart";

export type UserPress = {
  x: number;
  y: number;
  icon?: string;
  color?: string;
};

export type UserPressObj = {
  id: string;
} & UserPress;

interface UserPressFeedbackProps {}

interface UserPressContextProps {
  presses: UserPressObj[];
  onRemove: (id: string) => void;
}

const UserPressContext = createContext<UserPressContextProps>({
  presses: [],
  onRemove: () => false,
});

const UserPressFeedback: React.FC<UserPressFeedbackProps> = ({ children }) => {
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
              id: uniqid(),
            },
          ];
        });
      }
    });
  }, []);

  const onRemove = useCallback((id: string) => {
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
    <UserPressContext.Provider value={{ presses, onRemove }}>
      {children}
    </UserPressContext.Provider>
  );
};

const useUserPress = () => useContext(UserPressContext);

export { UserPressFeedback, useUserPress };
