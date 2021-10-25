import React from "react";
import style from "../style/style.css";
import resets from "../style/resets.css";
const App = () => {
  return (
    <div className="calculator-wrapper">
      <section id="display">Display Here</section>
      <section className="buttons-wrapper">
        <div className="ac-btn" id="#">
          AC
        </div>
        <div className="calc-buttons /-btn" id="#">
          /
        </div>
        <div className="calc-buttons X-btn" id="#">
          X
        </div>
        <div className="calc-buttons 7-btn" id="#">
          7
        </div>
        <div className="calc-buttons 8-btn" id="#">
          8
        </div>
        <div className="calc-buttons 9-btn" id="#">
          9
        </div>
        <div className="calc-buttons --btn" id="#">
          -
        </div>
        <div className="calc-buttons 4-btn" id="#">
          4
        </div>
        <div className="calc-buttons 5-btn" id="#">
          5
        </div>
        <div className="calc-buttons 6-btn" id="#">
          6
        </div>
        <div className="calc-buttons +-btn" id="#">
          +
        </div>
        <div className="calc-buttons 1-btn" id="#">
          1
        </div>
        <div className="calc-buttons 2-btn" id="#">
          2
        </div>
        <div className="calc-buttons 3-btn" id="#">
          3
        </div>
        <div className="calc-buttons equal-btn" id="#">
          =
        </div>
        <div className="calc-buttons 0-btn" id="#">
          0
        </div>
        <div className="calc-buttons .-btn" id="#">
          .
        </div>
      </section>
    </div>
  );
};

export default App;
