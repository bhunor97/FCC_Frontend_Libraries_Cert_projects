import React from "react";
import "../style/style.css";
import "../style/resets.css";
import hihat from "../audio/1_2_3.wav";

const Body = () => {
  return (
    <div className="container">
      <audio controls>
        <source src={hihat} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
export default Body;
