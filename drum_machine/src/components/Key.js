import React from "react";
import Body from "./Body";
import clap_1 from "../audio/Clap-1-short.wav";
import clap_2 from "../audio/Clap-2-short.wav";
import hat_1 from "../audio/Hat-long-1.wav";
import hat_2 from "../audio/Hat-short-1.wav";
import bass from "../audio/bass.wav";
import kick_1 from "../audio/Kick-short-1.wav";
import kick_2 from "../audio/Kick-short-2.wav";
import kick_3 from "../audio/Kick-short-3.wav";
import snare_1 from "../audio/Snare-1-short.wav";

const Key = () => {
  document.addEventListener("keydown", (e) => {
    //   clap_one
    if (e.key === "q") {
      if (clap_1.paused) {
        clap_1.play();
      } else {
        clap_1.currentTime = 0;
      }
    }
    // clap_two
    if (e.key === "w") {
      let clap_two = document.getElementById("W");
      if (clap_two.paused) {
        clap_two.play();
      } else {
        clap_two.currentTime = 0;
      }
    }
    // hat_1
    if (e.key === "e") {
      let hat_one = document.getElementById("E");
      if (hat_one.paused) {
        hat_one.play();
      } else {
        hat_one.currentTime = 0;
      }
    }
    // hat_2
    if (e.key === "a") {
      let hat_two = document.getElementById("A");
      if (hat_two.paused) {
        hat_two.play();
      } else {
        hat_two.currentTime = 0;
      }
    }
    // bass
    if (e.key === "s") {
      let bass_one = document.getElementById("S");
      if (bass_one.paused) {
        bass_one.play();
      } else {
        bass_one.currentTime = 0;
      }
    }
    // kick_one
    if (e.key === "d") {
      let kick_one = document.getElementById("D");
      if (kick_one.paused) {
        kick_one.play();
      } else {
        kick_one.currentTime = 0;
      }
    }
    // kick_two
    if (e.key === "z") {
      let kick_two = document.getElementById("Z");
      if (kick_two.paused) {
        kick_two.play();
      } else {
        kick_two.currentTime = 0;
      }
    }
    // kick_three
    if (e.key === "x") {
      let kick_three = document.getElementById("X");
      if (kick_three.paused) {
        kick_three.play();
      } else {
        kick_three.currentTime = 0;
      }
    }
    // snare_1
    if (e.key === "c") {
      let snare_1 = document.getElementById("C");
      if (snare_1.paused) {
        snare_1.play();
      } else {
        snare_1.currentTime = 0;
      }
    }
  });

  return (
    <div>
      <h1>asd</h1>
    </div>
  );
};

export default Key;
