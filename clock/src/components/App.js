import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

function App() {
  // states
  const [currentBreakLenght, setBreakLength] = useState(5);
  const [currentSeshLength, setSeshLength] = useState(25);
  const [currentDisplayLength, setDisplayLength] = useState(currentSeshLength);

  useEffect(() => {
    setBreakLength(5);
    setSeshLength(25);
  }, []);

  // Reset function
  const resetFunc = () => {
    setBreakLength(5);
    setSeshLength(25);
  };

  // Break Increment / Decrement functions
  const incrementBreak = () => {
    setBreakLength(currentBreakLenght + 1);
  };
  const decrementBreak = () => {
    setBreakLength(currentBreakLenght - 1);
  };

  // Session Increment / Decrement
  const incrementSesh = () => {
    setSeshLength(currentSeshLength + 1);
  };
  const decrementSesh = () => {
    setSeshLength(currentSeshLength - 1);
  };

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div className="break-session-container">
        {/* Break Length Section */}
        <section id="break-label">
          <h3>Break Length</h3>
          <div className="btn-display-container">
            <button id="break-decrement" onClick={incrementBreak}>
              +break
            </button>
            <div id="break-length">{currentBreakLenght}</div>
            <button id="break-increment" onClick={decrementBreak}>
              -break
            </button>
          </div>
        </section>
        {/* Session Length Section */}
        <section id="session-label">
          <h3>Session Length</h3>
          <div className="btn-display-container">
            <button id="session-decrement" onClick={incrementSesh}>
              +sesh
            </button>
            <div id="session-length">{currentSeshLength}</div>
            <button id="session-increment" onClick={decrementSesh}>
              -sesh
            </button>
          </div>
        </section>
      </div>
      {/* Timer Section */}
      <section id="timer-label">
        <h2>Session</h2>
        <div id="time-left">{currentDisplayLength}</div>
        <div className="btn-display-container">
          <button id="start_stop">start-stop-btn</button>
          <button id="reset" onClick={resetFunc}>
            reset-btn
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

// User Story #8
// User Story #11
