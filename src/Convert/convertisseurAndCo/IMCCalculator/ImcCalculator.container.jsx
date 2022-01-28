import React, { useState } from "react";

import ImcCalculatorView from "./ImcCalculator.view";

const ImcCalculatorContainer = () => {
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [imcResult, setImcResult] = useState("");

  const onChangeWeight = (e) => {
    setWeight(e.target.value);
  };

  const onChangeSize = (e) => {
    setSize(e.target.value);
  };

  const calculateIMC = () => {
    setSize("");
    setImcResult(weight / (size * size));
  };

  console.log(imcResult);
  return (
    <>
      <ImcCalculatorView
        weight={weight}
        size={size}
        onChangeWeight={onChangeWeight}
        onChangeSize={onChangeSize}
        calculateIMC={calculateIMC}
        imcResult={imcResult}
      />
    </>
  );
};

export default ImcCalculatorContainer;
