import classNames from "classnames";
import React, { useMemo } from "react";
import { useMainContext } from "../MainContext";

import styles from "./SlideCommon.module.scss";

const SlideCommonFooter = () => {
  const { pageNumber, nextPage, prevPage } = useMainContext();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerNum}>Page {pageNumber}</div>
      <div
        onClick={prevPage}
        className={classNames(styles.footerBtn, styles.footerBtnPrev)}
      >
        &lt;
      </div>
      <div
        onClick={nextPage}
        className={classNames(styles.footerBtn, styles.footerBtnNext)}
      >
        &gt;
      </div>
    </footer>
  );
};

export { SlideCommonFooter };
