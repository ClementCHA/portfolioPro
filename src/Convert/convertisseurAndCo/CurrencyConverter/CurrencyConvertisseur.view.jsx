import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import InputAdornment from "@mui/material/InputAdornment";
import Proptypes from "prop-types";

import Converter from "../../SVG/currencyConverter.svgIcons";

import styles from "./styles.module.scss";

const ConvertisseurView = ({
  handleChangeFirstCurrency,
  fromCurrency,
  allCurrency,
  handleChangeSecondCurrency,
  toCurrency,
  swapCurrency,
  amount,
  onChangeAmount,
  amountConvert,
  currencyToSymbolMap,
}) => {
  const currencyISO = Object.keys(allCurrency);
  let i = 0;

  const currencyList = currencyISO.map((c) => (
    <MenuItem value={c} key={i++}>
      {c} &nbsp;{" "}
      <span style={{ fontSize: "10px" }}>({currencyToSymbolMap[c]})</span>
    </MenuItem>
  ));

  return (
    <div className={styles.app}>
      <h2 className={styles.subTitle}>
        Currency Converter{<Converter style={{ marginLeft: "10px" }} />}
      </h2>
      <h3 className={styles.h3}> (Base: Euro)</h3>
      <div className={styles.moneyConvert}>
        <TextField
          label="Montant"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={amount}
          onChange={onChangeAmount}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <span style={{ fontSize: "10px" }}>
                  {amount && fromCurrency && currencyToSymbolMap[fromCurrency]}
                </span>
              </InputAdornment>
            ),
          }}
        />
        <ArrowForwardIcon />
        <FormControl style={{ width: "150px" }}>
          <InputLabel>Currency</InputLabel>
          <Select
            label="Currency"
            value={fromCurrency}
            onChange={handleChangeFirstCurrency}
          >
            {currencyList}
          </Select>
        </FormControl>
        <div className={styles.to}>
          TO
          <CompareArrowsIcon onClick={swapCurrency} />
        </div>
        <FormControl style={{ width: "150px" }}>
          <InputLabel>Currency</InputLabel>
          <Select
            label="Currency"
            value={toCurrency}
            onChange={handleChangeSecondCurrency}
          >
            {currencyList}
          </Select>
        </FormControl>
        <ArrowForwardIcon />
        <TextField
          label="Montant"
          type="number"
          value={amountConvert}
          disabled
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <span style={{ fontSize: "10px" }}>
                  {amountConvert && currencyToSymbolMap[toCurrency]}
                </span>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};

ConvertisseurView.propTypes = {
  handleChangeFirstCurrency: Proptypes.func,
  fromCurrency: Proptypes.string,
  allCurrency: Proptypes.oneOfType([Proptypes.array, Proptypes.object]),
  handleChangeSecondCurrency: Proptypes.func,
  toCurrency: Proptypes.string,
  swapCurrency: Proptypes.func,
  amount: Proptypes.string,
  onChangeAmount: Proptypes.func,
  amountConvert: Proptypes.string,
  currencyToSymbolMap: Proptypes.object,
};

export default ConvertisseurView;
