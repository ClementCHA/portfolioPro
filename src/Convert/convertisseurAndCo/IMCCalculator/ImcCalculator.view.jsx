import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Proptypes from "prop-types";

import {
  UNDER_18_5,
  FROM_18_5_TO_25,
  FROM_25_TO_30,
  FROM_30_TO_35,
  FROM_35_TO_40,
  MORE_40,
} from "./imcCalculator.constant";
import Weight from "../../SVG/weight.svgIcons";
import styles from "./styles.module.scss";

const personalizeResult = (imcResult) => {
  switch (true) {
    case (imcResult < 18, 5):
      return UNDER_18_5;
    case (imcResult >= 18, 5 && imcResult < 25):
      return <p>{FROM_18_5_TO_25}</p>;
    case imcResult >= 25 && imcResult < 30:
      return <p>{FROM_25_TO_30}</p>;
    case imcResult >= 30 && imcResult < 35:
      return <p>{FROM_30_TO_35}</p>;
    case imcResult >= 35 && imcResult < 40:
      return <p>{FROM_35_TO_40}</p>;
    case imcResult >= 40:
      return <p>{MORE_40}</p>;
    default:
      return "";
  }
};

const ImcCalculatorView = ({
  weight,
  size,
  onChangeWeight,
  onChangeSize,
  calculateIMC,
  imcResult,
}) => {
  return (
    <div className={styles.app}>
      <p className={styles.subTitle}>
        {" "}
        BMI Calculator {<Weight style={{ marginLeft: "10px" }} />}{" "}
      </p>
      <ul>
        <li className={styles.def}>
          The Body Mass Index, referred to more commonly as BMI, is a method
          used to calculate a person’s weight-related health risk.
        </li>
        <li className={styles.def}>
          Primarily, it takes into account a person’s height and weight.
        </li>
        <li className={styles.def}>
          Those who fall into higher BMI categories are likely to be at risk of
          developing diet-related diseases such as type-2 diabetes and heart
          disease.
        </li>
      </ul>
      <div className={styles.imc}>
        <TextField
          style={{ marginRight: "20px" }}
          label="Weight (KG)"
          type="number"
          value={weight}
          onChange={onChangeWeight}
        />
        <TextField
          style={{ marginRight: "20px" }}
          label="Size (metters)"
          type="number"
          value={size}
          onChange={onChangeSize}
        />
        <Button
          variant="contained"
          disabled={weight.length === 0 || size.length === 0}
          onClick={calculateIMC}
          style={{ fontSize: "0.6em" }}
        >
          Calculate
        </Button>{" "}
      </div>
      {imcResult && (
        <p className={styles.result}>
          Your BMI is {Math.round(imcResult * 100) / 100}:&nbsp;
          {personalizeResult(imcResult)}
        </p>
      )}
    </div>
  );
};

ImcCalculatorView.propTypes = {
  weight: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
  size: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
  onChangeWeight: Proptypes.func,
  onchangeSize: Proptypes.func,
  calculateIMC: Proptypes.func,
};

ImcCalculatorView.defaultProps = {
  weight: 0,
  size: 0,
};

export default ImcCalculatorView;
