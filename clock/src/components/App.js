import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

function App() {
  // states
  const [currentBreakLenght, setBreakLength] = useState(5);
  const [currentSeshLength, setSeshLength] = useState(25);
  const [currentMinute, setMinute] = useState(25);
  const [currentSecond, setSecond] = useState("00");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setBreakLength(5);
    setSeshLength(25);
    setMinute(25);
  }, []);

  // Reset function
  const resetFunc = () => {
    setBreakLength(5);
    setSeshLength(25);
    setMinute(25);
    setSecond("00");
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
    setMinute(currentSeshLength + 1);
  };
  const decrementSesh = () => {
    setSeshLength(currentSeshLength - 1);
    setMinute(currentSeshLength - 1);
  };

  // Timer function
  const timerFunc = () => {
    if (isRunning == false) {
      setIsRunning(true);
      if (setIsRunning) {
        // Minutes
        window.setInterval(() => {
          setMinute((currentMinute) => currentMinute - 1);
        }, 60000);

        // Seconds
        setSecond(60);
        window.setInterval(() => {
          setSecond((currentSecond) => currentSecond - 1);
        }, 100);
      }
    } else if (isRunning == true) {
      setIsRunning(false);
      if (isRunning == false) {
        // FINISH THIS
        // FINISH THIS
        // FINISH THIS
        // https://www.youtube.com/watch?v=sWKz9aLovjY
      }
    }
  };

  console.log(typeof currentSecond);
  console.log(currentSecond);

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
        <div id="time-left">
          {currentMinute}:{currentSecond}
        </div>
        <div className="btn-display-container">
          <button id="start_stop" onClick={timerFunc}>
            start-stop-btn
          </button>
          <button id="reset">reset-btn</button>
        </div>
      </section>
    </div>
  );
}

export default App;

// User Story #8
// User Story #11
