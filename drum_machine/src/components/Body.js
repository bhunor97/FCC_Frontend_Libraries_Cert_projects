import React from "react";
import "../style/style.css";
import "../style/resets.css";
import clap_1 from "../audio/Clap-1-short.wav";
import clap_2 from "../audio/Clap-2-short.wav";
import hat_1 from "../audio/Hat-long-1.wav";
import hat_2 from "../audio/Hat-short-1.wav";
import hat_3 from "../audio/Hat-short-2.wav";
import kick_1 from "../audio/Kick-short-1.wav";
import kick_2 from "../audio/Kick-short-2.wav";
import kick_3 from "../audio/Kick-short-3.wav";
import snare_1 from "../audio/Snare-1-short.wav";

const Body = () => {
  return (
    <div className="container">
      <audio controls>
        <source src={clap_1} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
export default Body;
