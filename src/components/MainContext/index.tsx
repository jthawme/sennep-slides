import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useHistory, useParams } from "react-router-dom";

type ActionsList = Array<() => void>;

enum Key {
  ArrowRight = "ArrowRight",
  ArrowLeft = "ArrowLeft",
}

interface MainContextProps {
  actions: ActionsList;
  addActions: (actions: ActionsList) => void;
  pageNumber: number;
}

const MainContext = createContext<MainContextProps>({
  actions: [],
  addActions: () => false,
  pageNumber: -1,
});

const MainContextContainer: React.FC<{ totalPages: number }> = ({
  children,
  totalPages,
}) => {
  const history = useHistory();

  const { page = "1" } = useParams<{ page?: string }>();
  const [actions, setActions] = useState<ActionsList>([]);

  const pageNumber = useMemo(() => {
    const num = parseInt(page, 10);
    return isNaN(num) ? -1 : num;
  }, [page]);

  const addActions = useCallback((newActions: ActionsList) => {
    setActions((currentActions) => {
      return [...currentActions, ...newActions];
    });
  }, []);

  const nextPage = useCallback(() => {
    if (pageNumber < totalPages) {
      history.push(`/main/${pageNumber + 1}`);
    }
  }, [history, pageNumber, totalPages]);

  const prevPage = useCallback(() => {
    if (pageNumber > 1) {
      history.push(`/main/${pageNumber - 1}`);
    }
  }, [history, pageNumber]);

  useEffect(() => {
    const cb = (e: KeyboardEvent) => {
      if (e.key === Key.ArrowLeft) {
        prevPage();
      }

      if (e.key === Key.ArrowRight) {
        nextPage();
      }
    };

    window.addEventListener("keyup", cb, false);

    return () => {
      window.removeEventListener("keyup", cb);
    };
  }, [nextPage, prevPage]);

  return (
    <MainContext.Provider
      value={{
        actions,
        addActions,
        pageNumber,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { MainContextContainer, useMainContext };
