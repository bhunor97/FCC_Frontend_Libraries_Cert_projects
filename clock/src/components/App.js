import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

function App() {
  // variables
  let doubleZero = ("0" + 0).slice(-2);

  // states
  const [currentBreakLenght, setBreakLength] = useState(5);
  const [currentSeshLength, setSeshLength] = useState(25);

  const [currentMinute, setMinute] = useState(25);
  const [currentSecond, setSecond] = useState(doubleZero);

  const [isRunning, setIsRunning] = useState(false);
  const [timerStarted, setTimer] = useState(false);

  const [currentDisplay, setDisplay] = useState("Session");

  // On load values
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
    setSecond(doubleZero);
    setTimer(false);
    setDisplay("Session");
    // Stop
    setIsRunning(false);
  };

  // BREAK LENGTH
  // Break Increment
  const incrementBreak = () => {
    // during "Session"
    if (!isRunning && currentDisplay === "Session" && currentBreakLenght < 60) {
      setBreakLength(currentBreakLenght + 1);
    }
    // during "Break"
    else if (
      !isRunning &&
      currentDisplay === "Break" &&
      currentBreakLenght < 60
    ) {
      setBreakLength(currentBreakLenght + 1);
      setMinute(currentBreakLenght + 1);
    } else {
      return;
    }
  };
  // Break Decrement
  const decrementBreak = () => {
    // during "Session"
    if (!isRunning && currentDisplay === "Session" && currentBreakLenght <= 1) {
      return;
    } else if (
      !isRunning &&
      currentDisplay === "Session" &&
      currentBreakLenght > 1
    ) {
      setBreakLength(currentBreakLenght - 1);
    }
    // during "Break"
    if (!isRunning && currentDisplay === "Break" && currentBreakLenght <= 1) {
      return;
    } else if (
      !isRunning &&
      currentDisplay === "Break" &&
      currentBreakLenght > 1
    ) {
      setBreakLength(currentBreakLenght - 1);
      setMinute(currentBreakLenght - 1);
    }
  };

  // SESSION LENGHT
  // Session Increment
  const incrementSesh = () => {
    if (!isRunning && currentDisplay === "Session" && currentSeshLength < 60) {
      setSeshLength(currentSeshLength + 1);
      setMinute(currentSeshLength + 1);
    }
  };
  // Session Decrement
  const decrementSesh = () => {
    if (!isRunning && currentDisplay === "Session" && currentSeshLength <= 1) {
      return;
    } else if (
      !isRunning &&
      currentDisplay === "Session" &&
      currentSeshLength > 1
    ) {
      setSeshLength(currentSeshLength - 1);
      setMinute(currentSeshLength - 1);
    }
  };

  // Timer Started
  let startTimer = () => {
    if (timerStarted === false) {
      setTimer(true);
    }
  };

  useEffect(() => {
    if (timerStarted) {
      setSecond(59);
      setMinute((currentMinute) => currentMinute - 1);
    }
  }, [timerStarted]);

  // Countdown useEffect
  useEffect(() => {
    if (isRunning) {
      const id = window.setInterval(() => {
        setSecond((currentSecond) => currentSecond - 1);
      }, 1000);
      // Stop (cleanup function)
      return () => window.clearInterval(id);
    }
  }, [isRunning]);

  // Reaching 0 Minutes useEffect
  useEffect(() => {
    // min below 10
    if (currentMinute < 10) {
      setMinute(("0" + currentMinute).slice(-2));
    }

    if (isRunning && currentMinute < 0) {
      setDisplay("Break");
      setMinute(currentBreakLenght);
      setSecond(doubleZero);
      if (currentDisplay === "Break") {
        setDisplay("Session");
        setMinute(currentSeshLength);
        setSecond(doubleZero);
      }
    }
  }, [currentMinute]);

  // Reaching 0 Seconds useEffect
  useEffect(() => {
    // sec below 10
    if (currentSecond < 10 && currentSecond >= 0) {
      setSecond(("0" + currentSecond).slice(-2));
    }
    if (isRunning && currentSecond < 0) {
      setSecond(59);
      setMinute((currentMinute) => currentMinute - 1);
    }
  }, [currentSecond]);

  // JSX PART
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div className="break-session-container">
        {/* Break Length Section */}
        <section id="break-label">
          <h3>Break Length</h3>
          <div className="btn-display-container">
            <button id="break-decrement" onClick={decrementBreak}>
              -break
            </button>
            <div id="break-length">{currentBreakLenght}</div>
            <button id="break-increment" onClick={incrementBreak}>
              +break
            </button>
          </div>
        </section>
        {/* Session Length Section */}
        <section id="session-label">
          <h3>Session Length</h3>
          <div className="btn-display-container">
            <button id="session-decrement" onClick={decrementSesh}>
              -sesh
            </button>
            <div id="session-length">{currentSeshLength}</div>
            <button id="session-increment" onClick={incrementSesh}>
              +sesh
            </button>
          </div>
        </section>
      </div>
      {/* Timer Section */}
      <section>
        <h2 id="timer-label">{currentDisplay}</h2>
        <div id="time-left">
          {currentMinute}:{currentSecond}
        </div>
        <div className="btn-display-container">
          <button id="reset" onClick={resetFunc}>
            reset-btn
          </button>
          <button
            id="start_stop"
            onClick={() => {
              // isRunning toggle
              if (isRunning === true) {
                setIsRunning(false);
              } else if (isRunning === false) {
                setIsRunning(true);
              }
              // startTimer function call
              startTimer();
            }}
          >
            start-stop-btn
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
