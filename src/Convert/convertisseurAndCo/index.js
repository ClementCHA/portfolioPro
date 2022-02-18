import CurrencyConvertisseurContainer from "./CurrencyConverter";
import ImcCalculatorContainer from "./IMCCalculator";

import { FloatingButton } from "../../FloattingButton";

import styles from "./styles.module.scss";

const convertisseurAndCo = () => {
  return (
    <div className={styles.converter}>
      <div className={styles.currency}>
        <CurrencyConvertisseurContainer />
      </div>
      <ImcCalculatorContainer />
      <FloatingButton />
    </div>
  );
};

export default convertisseurAndCo;
