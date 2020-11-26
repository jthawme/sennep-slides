import React, { useMemo } from "react";
import { DEFAULT_COLOR } from "../../utils/constants";
import { ColorBlock } from "../ColorBlock";
import { useMainContext } from "../MainContext";

import styles from "./SlideCommon.module.scss";

const SlideCommonFooter = () => {
  const {
    pageNumber,
    colorOne,
    colorTwo,
    setColorOne,
    setColorTwo,
    info,
  } = useMainContext();

  const notDefaultColors = useMemo(() => {
    return colorOne !== DEFAULT_COLOR.ONE || colorTwo !== DEFAULT_COLOR.TWO;
  }, [colorOne, colorTwo]);
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-num"]}>Page {pageNumber}</div>
      <div className={styles["footer-people"]}>People {info.usersCount}</div>
      <div className={styles["footer-color"]}>
        {notDefaultColors && (
          <button
            className={styles.mini}
            onClick={() => {
              setColorOne(DEFAULT_COLOR.ONE);
              setColorTwo(DEFAULT_COLOR.TWO);
            }}
          >
            Reset
          </button>
        )}

        <ColorBlock onUpdate={(color) => setColorOne(color)} color={colorOne} />
        <ColorBlock onUpdate={(color) => setColorTwo(color)} color={colorTwo} />
      </div>
    </footer>
  );
};

export { SlideCommonFooter };
