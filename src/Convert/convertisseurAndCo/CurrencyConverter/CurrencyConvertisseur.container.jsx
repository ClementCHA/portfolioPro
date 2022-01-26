import React, { useState, useEffect } from "react";
import axios from "axios";
import currencyToSymbolMap from "currency-symbol-map/map";

import ConvertisseurView from "./CurrencyConvertisseur.view";

const CurrencyConvertisseurContainer = () => {
  const [allCurrency, setAllCurrency] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [amountConvert, setAmountConvert] = useState("");

  useEffect(() => {
    getCurrencyData();
  }, []);

  useEffect(() => {
    calculateConvert();
  });

  const getCurrencyData = async () => {
    const fetchedCurrency = await axios(`https://api.exchangerate.host/latest`);
    setAllCurrency(fetchedCurrency.data.rates);
  };

  const handleChangeFirstCurrency = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleChangeSecondCurrency = (e) => {
    setToCurrency(e.target.value);
  };
  const swapCurrency = () => {
    if (fromCurrency && toCurrency) {
      setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
    }
  };

  const onChangeAmount = (e) => {
    e.target.value >= 0 && setAmount(e.target.value);
  };

  const calculateConvert = () => {
    if (amount > 0 && fromCurrency && toCurrency) {
      const firstCurrencyValue = allCurrency[fromCurrency];
      const secondCurrencyValue = allCurrency[toCurrency];
      setAmountConvert(
        Math.round((amount / firstCurrencyValue) * secondCurrencyValue * 100) /
          100
      );
    }
  };

  return (
    <ConvertisseurView
      handleChangeFirstCurrency={handleChangeFirstCurrency}
      fromCurrency={fromCurrency}
      allCurrency={allCurrency}
      handleChangeSecondCurrency={handleChangeSecondCurrency}
      toCurrency={toCurrency}
      swapCurrency={swapCurrency}
      amount={amount}
      onChangeAmount={onChangeAmount}
      amountConvert={amountConvert}
      currencyToSymbolMap={currencyToSymbolMap}
    />
  );
};

export default CurrencyConvertisseurContainer;
