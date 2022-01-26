import React from "react";

import MainPageView from "./MainPage.view";
import styles from "./style.module.scss";

const MainPageContainer = () => {
  return (
    <>
      <div className={styles.app}>
        <MainPageView />
      </div>
    </>
  );
};

export default MainPageContainer;
