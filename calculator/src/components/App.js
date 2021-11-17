import React from "react";
import { useState } from "react";
import { evaluate } from "mathjs";
import style from "../style/style.css";
import resets from "../style/resets.css";

const App = (props) => {
  // useState
  const [currentValue, setValue] = useState("0");

  // AC button func
  const clearButtonFunc = () => {
    setValue("0");
  };

  // Regex
  const regexSigns = /[+,*,/,-]/g;

  return (
    <>
      <div className="title-wrapper">
        <h1>Calculator Project</h1>
      </div>

      <div className="calculator-wrapper">
        {/* display */}
        <section id="display">
          <div className="calc-div">{currentValue}</div>
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
                typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "/"
              ) {
                return;
              }
              if (
                typeof currentValue == "string" &&
                currentValue.slice(-1).match(regexSigns)
              ) {
                if (currentValue.slice(-2, -1).match(regexSigns)) {
                  setValue(
                    currentValue.substring(0, currentValue.length - 2) + "/"
                  );
                } else
                  setValue(
                    currentValue.substring(0, currentValue.length - 1) + "/"
                  );
              } else {
                setValue(currentValue + "/");
              }
            }}
            className="calc-buttons division-btn"
            id="divide"
          >
            /
          </button>
          {/* Multiplication */}
          <button
            onClick={() => {
              if (
                typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "*"
              ) {
                return;
              }
              if (
                typeof currentValue == "string" &&
                currentValue.slice(-1).match(regexSigns)
              ) {
                if (currentValue.slice(-2, -1).match(regexSigns)) {
                  setValue(
                    currentValue.substring(0, currentValue.length - 2) + "*"
                  );
                } else
                  setValue(
                    currentValue.substring(0, currentValue.length - 1) + "*"
                  );
              } else {
                setValue(currentValue + "*");
              }
            }}
            className="calc-buttons multiplication-btn"
            id="multiply"
          >
            X
          </button>
          <button
            onClick={() => {
              currentValue === "0"
                ? setValue("7")
                : setValue(currentValue + "7");
            }}
            className="calc-buttons 7-btn"
            id="seven"
          >
            7
          </button>
          <button
            onClick={() => {
              currentValue === "0"
                ? setValue("8")
                : setValue(currentValue + "8");
            }}
            className="calc-buttons 8-btn"
            id="eight"
          >
            8
          </button>
          <button
            onClick={() => {
              currentValue === "0"
                ? setValue("9")
                : setValue(currentValue + "9");
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
                typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "-"
              ) {
                return;
              }
              if (
                typeof currentValue == "string" &&
                currentValue.slice(-1).match(regexSigns)
              ) {
                setValue(currentValue.substring(0, currentValue.length) + "-");
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
              currentValue === "0"
                ? setValue("4")
                : setValue(currentValue + "4");
            }}
            className="calc-buttons 4-btn"
            id="four"
          >
            4
          </button>
          <button
            onClick={() => {
              currentValue === "0"
                ? setValue("5")
                : setValue(currentValue + "5");
            }}
            className="calc-buttons 5-btn"
            id="five"
          >
            5
          </button>
          <button
            onClick={() => {
              currentValue === "0"
                ? setValue("6")
                : setValue(currentValue + "6");
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
                typeof currentValue == "string" &&
                currentValue.split("").slice(-1) == "+"
              ) {
                return;
              }
              if (
                typeof currentValue == "string" &&
                currentValue.slice(-1).match(regexSigns)
              ) {
                if (currentValue.slice(-2, -1).match(regexSigns)) {
                  setValue(
                    currentValue.substring(0, currentValue.length - 2) + "+"
                  );
                } else
                  setValue(
                    currentValue.substring(0, currentValue.length - 1) + "+"
                  );
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
              currentValue === "0"
                ? setValue("1")
                : setValue(currentValue + "1");
            }}
            className="calc-buttons 1-btn"
            id="one"
          >
            1
          </button>
          <button
            onClick={() => {
              currentValue === "0"
                ? setValue("2")
                : setValue(currentValue + "2");
            }}
            className="calc-buttons 2-btn"
            id="two"
          >
            2
          </button>
          <button
            onClick={() => {
              currentValue === "0"
                ? setValue("3")
                : setValue(currentValue + "3");
            }}
            className="calc-buttons 3-btn"
            id="three"
          >
            3
          </button>
          {/* EQUALS */}
          <button
            onClick={() => {
              setValue(evaluate(currentValue));
            }}
            className="calc-buttons equal-btn"
            id="equals"
          >
            =
          </button>
          <button
            onClick={() => {
              currentValue === "0"
                ? setValue("0")
                : setValue(currentValue + "0");
            }}
            className="calc-buttons zero-btn"
            id="zero"
          >
            0
          </button>
          <button
            onClick={() => {
              // if (
              //   typeof currentValue == "string" &&
              //   currentValue.split("").slice(-1) == "."
              // ) {
              //   return;
              // } else {
              //   setValue(currentValue + ".");
              // }

              let maximum = Math.max(
                currentValue.lastIndexOf("*"),
                currentValue.lastIndexOf("/"),
                currentValue.lastIndexOf("+"),
                currentValue.lastIndexOf("-")
              );

              if (currentValue.lastIndexOf(".") <= maximum) {
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
    </>
  );
};

export default App;
