import React, { useState } from "react";

import CalculatriceView from "./Calculatrice.view";

const CalculatriceContainer = () => {
  const [firstOperator, setFirstOperator] = useState("");
  const [number, setNumber] = useState("");
  const [secondOperator, setSecondOperator] = useState("");
  const [mathOperation, setMathOperation] = useState("");
  const [expression, setExpression] = useState(null);
  const [isDecimal, setIsDecimal] = useState(false);

  const myArrayOfOperator = [
    { key: "/", value: "/" },
    { key: "+", value: "+" },
    { key: "-", value: "-" },
    { key: "clear", value: "CE" },
    { key: "x", value: "x" },
    { key: ",", value: "," },
    { key: "=", value: "=" },
  ];

  const myArrayOfNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const OPERATORVALUE = {
    MULTIPLY: "x",
    DIVIDE: "/",
    ADD: "+",
    SUBSTRACTION: "-",
    CLEAR: "clear",
    EGAL: "=",
    COMMA: ",",
  };
  const operateAgain = () => {
    setExpression(null);
    if (mathOperation === OPERATORVALUE.ADD) {
      setExpression(
        `${JSON.parse(firstOperator) + JSON.parse(secondOperator)}`
      );

      setFirstOperator(
        `${JSON.parse(firstOperator) + JSON.parse(secondOperator)}`
      );
      setSecondOperator("");
    }
    if (mathOperation === OPERATORVALUE.DIVIDE) {
      setExpression(
        `${JSON.parse(firstOperator) / JSON.parse(secondOperator)}`
      );

      setFirstOperator(
        `${JSON.parse(firstOperator) / JSON.parse(secondOperator)}`
      );
      setSecondOperator("");
    }
    if (mathOperation === OPERATORVALUE.MULTIPLY) {
      setExpression(
        `${JSON.parse(firstOperator) * JSON.parse(secondOperator)}`
      );

      setFirstOperator(
        `${JSON.parse(firstOperator) * JSON.parse(secondOperator)}`
      );
      setSecondOperator("");
    }
    if (mathOperation === OPERATORVALUE.SUBSTRACTION) {
      setExpression(
        `${JSON.parse(firstOperator) - JSON.parse(secondOperator)}`
      );

      setFirstOperator(
        `${JSON.parse(firstOperator) - JSON.parse(secondOperator)}`
      );
      setSecondOperator("");
    }
  };

  const saveNumber = (e) => {
    if (expression) {
      setNumber("");
    }
    setNumber(number.concat(e.target.value));
    if (mathOperation.length > 0) {
      setExpression(null);
      setNumber(number.concat(e.target.value));
      setSecondOperator(number.concat(e.target.value));
    }
  };

  const operate = (e) => {
    switch (e.target.value) {
      //! Clear
      case OPERATORVALUE.CLEAR:
        setNumber("");
        setFirstOperator("");
        setSecondOperator("");
        setExpression("");
        setMathOperation("");
        setIsDecimal(false);
        break;
      //! Substraction
      case OPERATORVALUE.SUBSTRACTION:
        setFirstOperator(number);
        setNumber("");
        setExpression(number);
        setMathOperation(OPERATORVALUE.SUBSTRACTION);
        if (mathOperation.length > 0) {
          operateAgain();
        }
        break;
      //! Divide
      case OPERATORVALUE.DIVIDE:
        setFirstOperator(number);
        setNumber("");
        setExpression(number);
        setMathOperation(OPERATORVALUE.DIVIDE);
        if (mathOperation.length > 0) {
          operateAgain();
        }
        break;
      //! Multiply
      case OPERATORVALUE.MULTIPLY:
        setFirstOperator(number);
        setNumber("");
        setExpression(number);
        setMathOperation(OPERATORVALUE.MULTIPLY);
        if (mathOperation.length > 0) {
          operateAgain();
        }
        break;
      //! Comma
      case OPERATORVALUE.COMMA:
        if (!isDecimal) {
          setIsDecimal(true);
          setNumber(number.concat("."));
        }
        break;
      //! Add
      case OPERATORVALUE.ADD:
        setFirstOperator(number);
        setNumber("");
        setExpression(number);
        setMathOperation(OPERATORVALUE.ADD);
        if (mathOperation.length > 0) {
          operateAgain();
        }
        break;

      //! Si on appui sur égal, on check l'opération et on fais le calcul nécéssaire avec le nombre actuel + le nombre enristré dans le champs principal
      case OPERATORVALUE.EGAL:
        if (mathOperation === OPERATORVALUE.ADD) {
          setNumber(
            `${JSON.parse(firstOperator) + JSON.parse(secondOperator)}`
          );
          setFirstOperator("");
          setMathOperation("");
          setSecondOperator("");
          setExpression(null);
        }
        if (mathOperation === OPERATORVALUE.DIVIDE) {
          setNumber(
            `${JSON.parse(firstOperator) / JSON.parse(secondOperator)}`
          );
          setFirstOperator("");
          setMathOperation("");
          setSecondOperator("");
          setExpression(null);
        }

        if (mathOperation === OPERATORVALUE.SUBSTRACTION) {
          setNumber(
            `${JSON.parse(firstOperator) - JSON.parse(secondOperator)}`
          );
          setFirstOperator("");
          setMathOperation("");
          setSecondOperator("");
          setExpression(null);
        }

        if (mathOperation === OPERATORVALUE.SUBSTRACTION) {
          setNumber(
            `${JSON.parse(firstOperator) - JSON.parse(secondOperator)}`
          );
          setFirstOperator("");
          setMathOperation("");
          setSecondOperator("");
          setExpression(null);
        }

        if (mathOperation === OPERATORVALUE.MULTIPLY) {
          setNumber(
            `${JSON.parse(firstOperator) * JSON.parse(secondOperator)}`
          );
          setFirstOperator("");
          setMathOperation("");
          setSecondOperator("");
          setExpression(null);
        }
        break;

      default:
    }
  };
  // as we had characters, we will need to parseInt value to have int
  return (
    <>
      <CalculatriceView
        myArrayOfOperator={myArrayOfOperator}
        saveNumber={saveNumber}
        number={number}
        operate={operate}
        myArrayOfNumber={myArrayOfNumber}
        expression={expression}
      />
    </>
  );
};

export default CalculatriceContainer;
