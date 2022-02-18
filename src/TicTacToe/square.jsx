import React from "react";
import styles from "./style.module.scss";

const Square = ({ value, chooseSquare }) => {
  return (
    <div className={styles.square} onClick={chooseSquare}>
      {value}
    </div>
  );
};
export default Square;
