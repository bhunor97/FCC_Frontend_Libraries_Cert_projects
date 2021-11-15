import React from "react";
import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import "./style.css";

function App() {
  // states
  const [currentBreakLenght, setBreakLength] = useState(5);
  const [currentSeshLength, setSeshLength] = useState(25);

  const [currentMinute, setMinute] = useState(25);
  const [currentSecond, setSecond] = useState("00");

  const [isRunning, setIsRunning] = useState(false);
  const [timerStarted, setTimer] = useState(false);

  // const [minuteId, setMinuteId] = useState(null);
  const [secondId, setSecondId] = useState(null);

  const [currentDisplay, setDisplay] = useState("Session");

  const [isSecZero, setSecZero] = useState(null);
  const [isMinZero, setMinZero] = useState(false);

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
    setDisplay("Session");
    // Stop
    window.clearInterval(secondId);
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

      // Stop
    } else if (isRunning === false) {
      window.clearInterval(secondId);
    }
  }, [isRunning]);

  // Reaching 0 Seconds useEffect
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

  // Reaching 0 Minutes useEffect
  useEffect(() => {
    if (isRunning && currentMinute < 0) {
      if (currentDisplay === "Session") {
        setDisplay("Break");
        setMinute(currentBreakLenght - 1);
      } else if (currentDisplay === "Break") {
        {
          setDisplay("Session");
          setMinute(currentSeshLength - 1);
        }
      }
    }
  }, [currentMinute]);

  console.log(isMinZero);
  console.log(currentSecond);

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
      <section>
        <h2 id="timer-label">{currentDisplay}</h2>
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

// adjustable break length during breaks
// break - countdown to 0:59 and lower
