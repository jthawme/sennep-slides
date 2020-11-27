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
}

interface InfoDbObject {
  usersCount: number;
}

interface MainContextProps {
  pageNumber: number;
  colorOne: string;
  setColorOne: (color: string) => void;
  colorTwo: string;
  setColorTwo: (color: string) => void;
  info: InfoDbObject;
}

const MainContext = createContext<MainContextProps>({
  colorOne: DEFAULT_COLOR.ONE,
  colorTwo: DEFAULT_COLOR.TWO,
  setColorOne: () => false,
  setColorTwo: () => false,
  pageNumber: -1,
  info: DEFAULT_INFO,
});
const MainContextContainer: React.FC<{ totalPages: number }> = ({
  children,
  totalPages,
}) => {
  const history = useHistory();

  const { page = "1" } = useParams<{ page?: string }>();

  const [colorOne, setColorOne] = useState("#d4d7db");
  const [colorTwo, setColorTwo] = useState("#262626");
  const [info, setInfo] = useState({ ...DEFAULT_INFO });

  const pageNumber = useMemo(() => {
    const num = parseInt(page, 10);
    return isNaN(num) ? -1 : num;
  }, [page]);

  const nextPage = useCallback(() => {
    if (pageNumber < totalPages) {
      history.push(`/main/${pageNumber + 1}`);
    }
  }, [history, pageNumber]);

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

  useEffect(() => {
    document.body.style.setProperty("--color-theme-1", colorOne);
    document.body.style.setProperty("--color-theme-2", colorTwo);
  }, [colorOne, colorTwo]);

  useEffect(() => {
    infoRef.on("value", (snapshot) => {
      setInfo(snapshot.val());
    });
  }, []);

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        colorOne,
        setColorOne,
        colorTwo,
        setColorTwo,
        info,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { MainContextContainer, useMainContext };
