import React from "react";
import { useRef, useEffect } from "react";
import "../style/style.css";
import "../style/resets.css";
import clap_1 from "../audio/Clap-1-short.wav";
import clap_2 from "../audio/Clap-2-short.wav";
import hat_1 from "../audio/Hat-long-1.wav";
import hat_2 from "../audio/Hat-short-1.wav";
import bass from "../audio/bass.wav";
import kick_1 from "../audio/Kick-short-1.wav";
import kick_2 from "../audio/Kick-short-2.wav";
import kick_3 from "../audio/Kick-short-3.wav";
import snare_1 from "../audio/Snare-1-short.wav";

const Body = () => {
  // refs
  const clapOneRef = useRef();
  const clapTwoRef = useRef();
  const hatOneRef = useRef();
  const hatTwoRef = useRef();
  const bassOneRef = useRef();
  const kickOneRef = useRef();
  const kickTwoRef = useRef();
  const kickThreeRef = useRef();
  const snareOneRef = useRef();
  const dispRef = useRef();
  const volumeRef = useRef();

  const volumeFunc = () => {
    // volume slider
    let allClips = document.querySelectorAll(".clip");
    for (let i = 0; i < allClips.length; i++) {
      allClips[i].volume = volumeRef.current.value / 100;
    }
  };

  useEffect(() => {
    // keypress
    document.addEventListener("keydown", (e) => {
      // clapOneRef
      if (e.key === "q") {
        if (clapOneRef.current.paused) {
          clapOneRef.current.play();
          dispRef.current.innerText = "clap_1";
        } else {
          clapOneRef.current.currentTime = 0;
          dispRef.current.innerText = "clap_1";
        }
      }
      // clapTwoRef
      if (e.key === "w") {
        if (clapTwoRef.current.paused) {
          clapTwoRef.current.play();
          dispRef.current.innerText = "clap_2";
        } else {
          clapTwoRef.current.currentTime = 0;
          dispRef.current.innerText = "clap_2";
        }
      }
      // hatOneRef
      if (e.key === "e") {
        if (hatOneRef.current.paused) {
          hatOneRef.current.play();
          dispRef.current.innerText = "hihat_1";
        } else {
          hatOneRef.current.currentTime = 0;
          dispRef.current.innerText = "hihat_1";
        }
      }
      // hatTwoRef
      if (e.key === "a") {
        if (hatTwoRef.current.paused) {
          hatTwoRef.current.play();
          dispRef.current.innerText = "hihat_2";
        } else {
          hatTwoRef.current.currentTime = 0;
          dispRef.current.innerText = "hihat_2";
        }
      }
      // bassOneRef
      if (e.key === "s") {
        if (bassOneRef.current.paused) {
          bassOneRef.current.play();
          dispRef.current.innerText = "808";
        } else {
          bassOneRef.current.currentTime = 0;
          dispRef.current.innerText = "808";
        }
      }
      // kickOneRef
      if (e.key === "d") {
        if (kickOneRef.current.paused) {
          kickOneRef.current.play();
          dispRef.current.innerText = "kick_1";
        } else {
          kickOneRef.current.currentTime = 0;
          dispRef.current.innerText = "kick_1";
        }
      }
      // kickTwoRef
      if (e.key === "z") {
        if (kickTwoRef.current.paused) {
          kickTwoRef.current.play();
          dispRef.current.innerText = "kick_1";
        } else {
          kickTwoRef.current.currentTime = 0;
          dispRef.current.innerText = "kick_2";
        }
      }
      // kickThreeRef
      if (e.key === "x") {
        if (kickThreeRef.current.paused) {
          kickThreeRef.current.play();
          dispRef.current.innerText = "kick_3";
        } else {
          kickThreeRef.current.currentTime = 0;
          dispRef.current.innerText = "kick_3";
        }
      }
      // snareOneRef
      if (e.key === "c") {
        if (snareOneRef.current.paused) {
          snareOneRef.current.play();
          dispRef.current.innerText = "snare";
        } else {
          snareOneRef.current.currentTime = 0;
          dispRef.current.innerText = "snare";
        }
      }
    });
  }, []);

  return (
    <div id="drum-machine">
      <h1>Drum Machine</h1>
      <div className="drum-display-wrapper">
        <div className="display-volume-container">
          <div ref={dispRef} id="display">
            Click on something!
          </div>
          <div className="volume-container">
            <input
              type="range"
              min="0"
              max="100"
              id="myVolume"
              class="volumeSlider"
              ref={volumeRef}
              onChange={volumeFunc}
            />
          </div>
        </div>

        {/* Buttons: start */}
        <section className="drum-pad-section">
          {/* clap_1 */}
          <div
            onClick={() => {
              let clap_1 = document.getElementById("Q");
              if (clap_1.paused) {
                clap_1.play();
                dispRef.current.innerText = "clap_1";
              } else {
                clap_1.currentTime = 0;
                dispRef.current.innerText = "clap_1";
              }
            }}
            onKeyPress={document}
            className="drum-pad"
            id="clap_1"
          >
            Q
            <audio
              ref={clapOneRef}
              id="Q"
              className="clip"
              src={clap_1}
              type="audio/ogg"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
          {/* clap_2 */}
          <div
            onClick={() => {
              let clap_2 = document.getElementById("W");
              if (clap_2.paused) {
                clap_2.play();
                dispRef.current.innerText = "clap_2";
              } else {
                clap_2.currentTime = 0;
                dispRef.current.innerText = "clap_2";
              }
            }}
            className="drum-pad"
            id="clap_2"
          >
            W
            <audio
              ref={clapTwoRef}
              id="W"
              className="clip"
              src={clap_2}
              type="audio/ogg"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
          {/* hat_1 */}
          <div
            onClick={() => {
              let hat_1 = document.getElementById("E");
              if (hat_1.paused) {
                hat_1.play();
                dispRef.current.innerText = "hat_1";
              } else {
                hat_1.currentTime = 0;
                dispRef.current.innerText = "hat_1";
              }
            }}
            className="drum-pad"
            id="hat_1"
          >
            E
            <audio
              ref={hatOneRef}
              id="E"
              className="clip"
              src={hat_1}
              type="audio/ogg"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
          {/* hat_2 */}
          <div
            onClick={() => {
              let hat_2 = document.getElementById("A");
              if (hat_2.paused) {
                hat_2.play();
                dispRef.current.innerText = "hat_2";
              } else {
                hat_2.currentTime = 0;
                dispRef.current.innerText = "hat_2";
              }
            }}
            className="drum-pad"
            id="hat_2"
          >
            A
            <audio
              ref={hatTwoRef}
              id="A"
              className="clip"
              src={hat_2}
              type="audio/ogg"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
          {/* bass */}
          <div
            onClick={() => {
              let bass = document.getElementById("S");
              if (bass.paused) {
                bass.play();
                dispRef.current.innerText = "808";
              } else {
                bass.currentTime = 0;
                dispRef.current.innerText = "808";
              }
            }}
            className="drum-pad"
            id="bass"
          >
            S
            <audio
              ref={bassOneRef}
              id="S"
              className="clip"
              src={bass}
              type="audio/ogg"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
          {/* kick_1 */}
          <div
            onClick={() => {
              let kick_1 = document.getElementById("D");
              if (kick_1.paused) {
                kick_1.play();
                dispRef.current.innerText = "kick_1";
              } else {
                kick_1.currentTime = 0;
                dispRef.current.innerText = "kick_1";
              }
            }}
            className="drum-pad"
            id="kick_1"
          >
            D
            <audio
              ref={kickOneRef}
              id="D"
              className="clip"
              src={kick_1}
              type="audio/ogg"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
          {/* kick_2 */}
          <div
            onClick={() => {
              let kick_2 = document.getElementById("Z");
              if (kick_2.paused) {
                kick_2.play();
                dispRef.current.innerText = "kick_2";
              } else {
                kick_2.currentTime = 0;
                dispRef.current.innerText = "kick_2";
              }
            }}
            className="drum-pad"
            id="kick_2"
          >
            Z
            <audio
              ref={kickTwoRef}
              id="Z"
              className="clip"
              src={kick_2}
              type="audio/ogg"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
          {/* kick_3 */}
          <div
            onClick={() => {
              let kick_3 = document.getElementById("X");
              if (kick_3.paused) {
                kick_3.play();
                dispRef.current.innerText = "kick_3";
              } else {
                kick_3.currentTime = 0;
                dispRef.current.innerText = "kick_3";
              }
            }}
            className="drum-pad"
            id="kick_3"
          >
            X
            <audio
              ref={kickThreeRef}
              id="X"
              className="clip"
              src={kick_3}
              type="audio/ogg"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
          {/* snare_1 */}
          <div
            onClick={() => {
              let snare_1 = document.getElementById("C");
              if (snare_1.paused) {
                snare_1.play();
                dispRef.current.innerText = "snare";
              } else {
                snare_1.currentTime = 0;
                dispRef.current.innerText = "snare";
              }
            }}
            className="drum-pad"
            id="snare_1"
          >
            C
            <audio
              ref={snareOneRef}
              id="C"
              className="clip"
              src={snare_1}
              type="audio/ogg"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Body;
