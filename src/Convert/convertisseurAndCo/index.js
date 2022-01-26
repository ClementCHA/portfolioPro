import CurrencyConvertisseurContainer from "./CurrencyConverter";
import ImcCalculatorContainer from "./IMCCalculator";

import styles from "./styles.module.scss";

const convertisseurAndCo = () => {
  return (
    <div className={styles.converter}>
      <h2 className={styles.title}>Converter & Co</h2>
      <div className={styles.currency}>
        <CurrencyConvertisseurContainer />
      </div>
      <ImcCalculatorContainer />
    </div>
  );
};

export default convertisseurAndCo;
