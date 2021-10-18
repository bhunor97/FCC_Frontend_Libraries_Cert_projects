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
            document.getElementById("Q").play();
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
            document.getElementById("W").play();
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
            document.getElementById("E").play();
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
            document.getElementById("A").play();
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
            document.getElementById("S").play();
          }}
          className="drum-pad"
          id="bass"
        >
          S
          <audio
            id="S"
            className="clip"
            src={bass}
            type="audio/ogg"
            preload="auto"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
        {/* kick_1 */}
        <div
          onClick={() => {
            document.getElementById("D").play();
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
            document.getElementById("Z").play();
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
            document.getElementById("X").play();
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
            document.getElementById("C").play();
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
