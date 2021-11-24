import React from "react";
import { useState, useEffect, useRef } from "react";
import beep_2 from "../audio/beep_2.wav";
import "./style.css";

function App() {
  // states
  const [currentBreakLenght, setBreakLength] = useState(5);
  const [currentSeshLength, setSeshLength] = useState(25);
  const [currentMinute, setMinute] = useState(25);
  const [currentSecond, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerStarted, setTimer] = useState(false);
  const [currentDisplay, setDisplay] = useState("Session");
  // const [breakTime, setBreakTime] = useState(false);

  // refs
  const beepSound = useRef();
  const displayValue = useRef();

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
    setSecond(0);
    setTimer(false);
    setDisplay("Session");
    // Running Stop
    setIsRunning(false);
    // Audio Stop
    beepSound.current.pause();
    beepSound.current.load();
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

  // Timer Started Toggle
  let startTimer = () => {
    if (timerStarted === false) {
      setTimer(true);
    }
  };
  // Timer Started
  useEffect(() => {
    if (timerStarted) {
      setMinute(currentSeshLength);
      // setSecond(0);
    }
  }, [timerStarted]);

  // START_STOP
  useEffect(() => {
    if (isRunning) {
      const id = window.setInterval(() => {
        setSecond((currentSecond) => currentSecond - 1);
      }, 1000);
      // Stop (cleanup function)
      return () => window.clearInterval(id);
    }
  }, [isRunning]);

  // Reaching 0 Seconds
  useEffect(() => {
    if (isRunning && currentSecond <= 0) {
      setSecond(59);
      setMinute((currentMinute) => currentMinute - 1);
    }
  }, [currentSecond]);

  // Reaching 0 Minutes
  useEffect(() => {
    if (isRunning && currentMinute < 0) {
      setMinute(currentBreakLenght);
      // setSecond(0);
    }
  }, [currentMinute, isRunning]);

  useEffect(() => {
    if (isRunning && currentMinute < 0 && currentDisplay === "Session") {
      setDisplay("Break");
      beepSound.current.play();
    }
    if (isRunning && currentMinute < 0 && currentDisplay === "Break") {
      setDisplay("Session");
      beepSound.current.play();
    }
  }, [currentMinute, currentDisplay]);

  console.log(currentMinute, currentSecond, currentDisplay === "Session");

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
        <div id="timer-label">{currentDisplay}</div>
        <div id="time-left" ref={displayValue}>
          {currentMinute < 10 ? ("0" + currentMinute).slice(-2) : currentMinute}
          :
          {currentSecond < 10 ? ("0" + currentSecond).slice(-2) : currentSecond}
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
      {/* Audio */}
      <audio ref={beepSound} id="beep" src={beep_2}></audio>
    </div>
  );
}

export default App;
