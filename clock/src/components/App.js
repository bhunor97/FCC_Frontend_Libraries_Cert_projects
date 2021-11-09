import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [currentBreakLenght, setBreakLength] = useState(5);
  const [currentSeshLength, setSeshLength] = useState(25);

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div className="break-session-container">
        {/* Break Length Section */}
        <section id="break-label">
          <h3 className="#">Break Length</h3>
          <div className="btn-display-container">
            <button id="break-decrement">decr-btn</button>
            <div id="break-length">{currentBreakLenght}</div>
            <button id="break-increment">incr-btn</button>
          </div>
        </section>
        {/* Session Length Section */}
        <section id="session-label">
          <h3 className="#">Session Length</h3>
          <div className="btn-display-container">
            <button id="session-decrement">decr-btn</button>
            <div id="session-length">{currentSeshLength}</div>
            <button id="session-increment">incr-btn</button>
          </div>
        </section>
      </div>
      {/* Timer Section */}
      <section id="timer-label">
        <h2 className="#">Session</h2>
        <div id="time-left">time left display</div>
        <div className="btn-display-container">
          <button id="start-stop">start-stop-btn</button>
          <button id="reset">reset-btn</button>
        </div>
      </section>
    </div>
  );
}

export default App;
