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
  const [timerStarted, setTimer] = useState(false);

  const [minuteId, setMinuteId] = useState(null);
  const [secondId, setSecondId] = useState(null);

  const [currentDisplay, setDisplay] = useState("Session");

  const [isSecZero, setSecZero] = useState(null);
  const [isMinZero, setMinZero] = useState(null);

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
    setSecond("00");
    setTimer(false);
    // Stop
    window.clearInterval(secondId);
    window.clearInterval(minuteId);
  };

  // Break Increment / Decrement functions
  const incrementBreak = () => {
    if (currentBreakLenght < 60) {
      setBreakLength(currentBreakLenght + 1);
    } else {
      return;
    }
  };
  const decrementBreak = () => {
    if (currentBreakLenght <= 1) {
      return;
    } else {
      setBreakLength(currentBreakLenght - 1);
    }
  };

  // Session Increment / Decrement
  const incrementSesh = () => {
    setSeshLength(currentSeshLength + 1);
    setMinute(currentSeshLength + 1);
  };
  const decrementSesh = () => {
    if (currentSeshLength <= 1) {
      return;
    } else {
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
      setMinute(currentMinute - 1);
    }
  }, [timerStarted]);

  // Countdown useEffect
  useEffect(() => {
    if (isRunning) {
      // Seconds;
      const secId = window.setInterval(() => {
        setSecond((currentSecond) => currentSecond - 1);
      }, 100);
      setSecondId(secId);

      // // Minutes
      // const minId = window.setInterval(() => {
      //   setMinute((currentMinute) => currentMinute - 1);
      // }, 6000);
      // setMinuteId(minId);

      // Stop
    } else if (isRunning === false) {
      window.clearInterval(secondId);
      // window.clearInterval(minuteId);
    }
  }, [isRunning]);

  // Reaching zero seconds useEffect
  useEffect(() => {
    if (currentSecond > 0 || typeof currentSecond === "string") {
      setSecZero(false);
    } else if (currentSecond <= 0) {
      setSecZero(true);
      if (isSecZero) {
        setSecond(59);
        setMinute(currentMinute - 1);
      }
    }
  }, [currentSecond]);

  // Reaching zero minutes useEffect
  useEffect(() => {
    if (currentMinute > 0) {
      setMinZero(false);
    } else if (currentMinute <= 0) {
      setMinZero(true);
      if (isMinZero) {
        setMinute(currentBreakLenght - 1);
        setDisplay("Break");
      }
    }
  }, [currentMinute]);

  console.log(currentSecond);
  console.log(isSecZero);

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div className="break-session-container">
        {/* Break Length Section */}
        <section id="break-label">
          <h3>Break Length</h3>
          <div className="btn-display-container">
            <button id="break-increment" onClick={decrementBreak}>
              -break
            </button>
            <div id="break-length">{currentBreakLenght}</div>
            <button id="break-decrement" onClick={incrementBreak}>
              +break
            </button>
          </div>
        </section>
        {/* Session Length Section */}
        <section id="session-label">
          <h3>Session Length</h3>
          <div className="btn-display-container">
            <button id="session-increment" onClick={decrementSesh}>
              -sesh
            </button>
            <div id="session-length">{currentSeshLength}</div>
            <button id="session-decrement" onClick={incrementSesh}>
              +sesh
            </button>
          </div>
        </section>
      </div>
      {/* Timer Section */}
      <section id="timer-label">
        <h2>{currentDisplay}</h2>
        <div id="time-left">
          {currentMinute}:{currentSecond}
        </div>
        <div className="btn-display-container">
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
          <button id="reset" onClick={resetFunc}>
            reset-btn
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
