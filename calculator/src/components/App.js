import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  atan2,
  chain,
  derivative,
  e,
  evaluate,
  log,
  pi,
  pow,
  round,
  sqrt,
} from "mathjs";
import style from "../style/style.css";
import resets from "../style/resets.css";

const App = (props) => {
  // useState
  const [currentValue, setValue] = useState("0");

  // AC button func
  const clearButtonFunc = () => {
    setValue("0");
  };

  const displayRef = useRef();
  console.log(typeof currentValue);
  console.log(currentValue);

  return (
    <div className="calculator-wrapper">
      {/* display */}
      <section ref={displayRef} id="display">
        {currentValue}
      </section>
      {/* buttons */}
      <section className="buttons-wrapper">
        <button
          onClick={clearButtonFunc}
          className="calc-buttons ac-btn"
          id="clear"
        >
          AC
        </button>
        {/* Division Button */}
        <button
          onClick={() => {
            if (
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "/") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "-") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "+") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "x")
            ) {
              return;
            } else {
              setValue(currentValue + "/");
            }
          }}
          className="calc-buttons /-btn"
          id="divide"
        >
          /
        </button>
        {/* Multiplication */}
        <button
          onClick={() => {
            if (
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "y") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "-") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "+") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "/")
            ) {
              return;
            } else {
              setValue(currentValue + "x");
            }
          }}
          className="calc-buttons X-btn"
          id="multiply"
        >
          X
        </button>
        <button
          onClick={() => {
            currentValue === "0" ? setValue("7") : setValue(currentValue + "7");
          }}
          className="calc-buttons 7-btn"
          id="seven"
        >
          7
        </button>
        <button
          onClick={() => {
            currentValue === "0" ? setValue("8") : setValue(currentValue + "8");
          }}
          className="calc-buttons 8-btn"
          id="eight"
        >
          8
        </button>
        <button
          onClick={() => {
            currentValue === "0" ? setValue("9") : setValue(currentValue + "9");
          }}
          className="calc-buttons 9-btn"
          id="nine"
        >
          9
        </button>
        {/* Subtraction */}
        <button
          onClick={() => {
            if (
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "-") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "/") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "+") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "x")
            ) {
              return;
            } else {
              setValue(currentValue + "-");
            }
          }}
          className="calc-buttons minus-btn"
          id="subtract"
        >
          -
        </button>
        <button
          onClick={() => {
            currentValue === "0" ? setValue("4") : setValue(currentValue + "4");
          }}
          className="calc-buttons 4-btn"
          id="four"
        >
          4
        </button>
        <button
          onClick={() => {
            currentValue === "0" ? setValue("5") : setValue(currentValue + "5");
          }}
          className="calc-buttons 5-btn"
          id="five"
        >
          5
        </button>
        <button
          onClick={() => {
            currentValue === "0" ? setValue("6") : setValue(currentValue + "6");
          }}
          className="calc-buttons 6-btn"
          id="six"
        >
          6
        </button>
        {/* Addition button */}
        <button
          onClick={() => {
            if (
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "+") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "-") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "/") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "x")
            ) {
              return;
            } else {
              setValue(currentValue + "+");
            }
          }}
          className="calc-buttons plus-btn"
          id="add"
        >
          +
        </button>
        <button
          onClick={() => {
            currentValue === "0" ? setValue("1") : setValue(currentValue + "1");
          }}
          className="calc-buttons 1-btn"
          id="one"
        >
          1
        </button>
        <button
          onClick={() => {
            currentValue === "0" ? setValue("2") : setValue(currentValue + "2");
          }}
          className="calc-buttons 2-btn"
          id="two"
        >
          2
        </button>
        <button
          onClick={() => {
            currentValue === "0" ? setValue("3") : setValue(currentValue + "3");
          }}
          className="calc-buttons 3-btn"
          id="three"
        >
          3
        </button>
        {/* EQUALS */}
        <button
          onClick={() => {
            // Division
            if (
              typeof currentValue == "string" &&
              currentValue.split("").includes("/")
            ) {
              let splitValues = currentValue.split("/");
              let valueOne = parseFloat(splitValues[0]);
              let valueTwo = parseFloat(splitValues[1]);
              setValue(valueOne / valueTwo);
            }
            // Addition
            if (typeof currentValue == "string" && currentValue.includes("+")) {
              let splitValues = currentValue.split("+");
              let valueOne = parseFloat(splitValues[0]);
              let valueTwo = parseFloat(splitValues[1]);
              setValue(valueOne + valueTwo);
            }
            // Multiplication
            if (typeof currentValue == "string" && currentValue.includes("x")) {
              let splitValues = currentValue.split("x");
              let valueOne = parseFloat(splitValues[0]);
              let valueTwo = parseFloat(splitValues[1]);
              setValue(valueOne * valueTwo);
            }
            // Subtraction
            if (typeof currentValue == "string" && currentValue.includes("-")) {
              let splitValues = currentValue.split("-");
              let valueOne = parseFloat(splitValues[0]);
              let valueTwo = parseFloat(splitValues[1]);
              setValue(valueOne - valueTwo);
            }
            // Chain equations
            if (
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "+") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "-") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "/") ||
              (typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "x")
            ) {
              let evaluated = evaluate(currentValue);
              setValue(evaluated);
            }
          }}
          className="calc-buttons equal-btn"
          id="equals"
        >
          =
        </button>
        <button
          onClick={() => {
            currentValue === "0" ? setValue("0") : setValue(currentValue + "0");
          }}
          className="calc-buttons 0-btn"
          id="zero"
        >
          0
        </button>
        <button
          onClick={() => {
            if (
              typeof currentValue === "string" &&
              currentValue.split("").includes(".")
            ) {
              return;
            } else {
              setValue(currentValue + ".");
            }
          }}
          className="calc-buttons decimal-btn"
          id="decimal"
        >
          .
        </button>
      </section>
    </div>
  );
};

export default App;
