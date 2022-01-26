import React from "react";

import styles from "./calculatrice.module.scss";

const CalculatriceView = ({
  saveNumber,
  number,
  operate,
  myArrayOfOperator,
  myArrayOfNumber,
  expression,
}) => {
  return (
    <div className={styles.calculatorProject}>
      <h1 className={styles.title}> My really original Calculator</h1>
      <div className={styles.calculator}>
        <div className={styles.result}>{!expression ? number : expression}</div>
        <div className={styles.operators}>
          {myArrayOfOperator.map((operator) => {
            return (
              <div className={styles.buttonOperator}>
                <button
                  key={operator.key}
                  value={operator.key}
                  onClick={operate}
                  className={styles.buttonStyle}
                >
                  {operator.value}
                </button>
              </div>
            );
          })}
        </div>
        <div className={styles.numbers}>
          {myArrayOfNumber.map((number) => (
            <div className={styles.buttonOperator}>
              <button
                key={number}
                onClick={saveNumber}
                value={number}
                className={styles.buttonStyle}
              >
                {number}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatriceView;
