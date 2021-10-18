import React from "react";
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
  return (
    <div id="drum-machine">
      <div id="display">Display Here</div>
      {/* Buttons: start */}
      <section className="drum-pad-section">
        {/* clap_1 */}
        <div
          onClick={() => {
            let clap_1 = document.getElementById("Q");
            if (clap_1.paused) {
              clap_1.play();
            } else {
              clap_1.currentTime = 0;
            }
          }}
          className="drum-pad"
          id="clap_1"
        >
          Q
          <audio id="Q" className="clip" src={clap_1} type="audio/ogg">
            Your browser does not support the audio element.
          </audio>
        </div>
        {/* clap_2 */}
        <div
          onClick={() => {
            let clap_2 = document.getElementById("W");
            if (clap_2.paused) {
              clap_2.play();
            } else {
              clap_2.currentTime = 0;
            }
          }}
          className="drum-pad"
          id="clap_2"
        >
          W
          <audio id="W" className="clip" src={clap_2} type="audio/ogg">
            Your browser does not support the audio element.
          </audio>
        </div>
        {/* hat_1 */}
        <div
          onClick={() => {
            let hat_1 = document.getElementById("E");
            if (hat_1.paused) {
              hat_1.play();
            } else {
              hat_1.currentTime = 0;
            }
          }}
          className="drum-pad"
          id="hat_1"
        >
          E
          <audio id="E" className="clip" src={hat_1} type="audio/ogg">
            Your browser does not support the audio element.
          </audio>
        </div>
        {/* hat_2 */}
        <div
          onClick={() => {
            let hat_2 = document.getElementById("A");
            if (hat_2.paused) {
              hat_2.play();
            } else {
              hat_2.currentTime = 0;
            }
          }}
          className="drum-pad"
          id="hat_2"
        >
          A
          <audio id="A" className="clip" src={hat_2} type="audio/ogg">
            Your browser does not support the audio element.
          </audio>
        </div>
        {/* bass */}
        <div
          onClick={() => {
            let bass = document.getElementById("S");
            if (bass.paused) {
              bass.play();
            } else {
              bass.currentTime = 0;
            }
          }}
          className="drum-pad"
          id="bass"
        >
          S
          <audio id="S" className="clip" src={bass} type="audio/ogg">
            Your browser does not support the audio element.
          </audio>
        </div>
        {/* kick_1 */}
        <div
          onClick={() => {
            let kick_1 = document.getElementById("D");
            if (kick_1.paused) {
              kick_1.play();
            } else {
              kick_1.currentTime = 0;
            }
          }}
          className="drum-pad"
          id="kick_1"
        >
          D
          <audio id="D" className="clip" src={kick_1} type="audio/ogg">
            Your browser does not support the audio element.
          </audio>
        </div>
        {/* kick_2 */}
        <div
          onClick={() => {
            let kick_2 = document.getElementById("Z");
            if (kick_2.paused) {
              kick_2.play();
            } else {
              kick_2.currentTime = 0;
            }
          }}
          className="drum-pad"
          id="kick_2"
        >
          Z
          <audio id="Z" className="clip" src={kick_2} type="audio/ogg">
            Your browser does not support the audio element.
          </audio>
        </div>
        {/* kick_3 */}
        <div
          onClick={() => {
            let kick_3 = document.getElementById("X");
            if (kick_3.paused) {
              kick_3.play();
            } else {
              kick_3.currentTime = 0;
            }
          }}
          className="drum-pad"
          id="kick_3"
        >
          X
          <audio id="X" className="clip" src={kick_3} type="audio/ogg">
            Your browser does not support the audio element.
          </audio>
        </div>
        {/* snare_1 */}
        <div
          onClick={() => {
            let snare_1 = document.getElementById("C");
            if (snare_1.paused) {
              snare_1.play();
            } else {
              snare_1.currentTime = 0;
            }
          }}
          className="drum-pad"
          id="snare_1"
        >
          C
          <audio id="C" className="clip" src={snare_1} type="audio/ogg">
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>
    </div>
  );
};
export default Body;
