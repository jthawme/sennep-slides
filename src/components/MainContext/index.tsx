import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useHistory, useParams } from "react-router-dom";
import { DEFAULT_COLOR, DEFAULT_INFO } from "../../utils/constants";
import { infoRef } from "../../utils/db";

enum Key {
  ArrowRight = "ArrowRight",
  ArrowLeft = "ArrowLeft",
  D = "D",
}

interface InfoDbObject {
  usersCount: Record<string, true>;
}

interface MainContextProps {
  pageNumber: number;
  usersCount: number;
  nextPage: () => void;
  prevPage: () => void;
  debug: boolean;
}

const MainContext = createContext<MainContextProps>({
  pageNumber: -1,
  usersCount: -1,
  nextPage: () => false,
  prevPage: () => false,
  debug: false,
});
const MainContextContainer: React.FC<{ totalPages: number }> = ({
  children,
  totalPages,
}) => {
  const history = useHistory();

  const { page = "1" } = useParams<{ page?: string }>();
  const [info, setInfo] = useState<InfoDbObject>({ ...DEFAULT_INFO });

  const [debug, setDebug] = useState(false);

  const usersCount = useMemo(() => {
    if (!info) {
      return -1;
    }

    return Object.keys(info.usersCount).length - 1;
  }, [info]);

  const pageNumber = useMemo(() => {
    const num = parseInt(page, 10);
    return isNaN(num) ? -1 : num;
  }, [page]);

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

      if (e.key === Key.D && e.shiftKey) {
        setDebug((s) => !s);
      }
    };

    window.addEventListener("keyup", cb, false);

    return () => {
      window.removeEventListener("keyup", cb);
    };
  }, [nextPage, prevPage]);

  useEffect(() => {
    infoRef.on("value", (snapshot) => {
      setInfo(snapshot.val());
    });
  }, []);

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        usersCount,
        nextPage,
        prevPage,
        debug,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { MainContextContainer, useMainContext };
