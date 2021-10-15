import React from "react";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import { useState, useEffect } from "react";
import style from "../style/style.css";
import resets from "../style/resets.css";

export default function Body() {
  let bgColor = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  // random bg
  const randomBg = Math.floor(Math.random() * bgColor.length);

  const [currentQuote, setQuote] = useState("");

  const getQuote = () => {
    // random number
    let randomNumber = Math.floor(Math.random() * 100);

    // fetch
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuote(data[randomNumber]));

    let textElement = document.getElementById("text");
    $(textElement).animate({ opacity: 0 }, 0, function () {
      $(this).animate({ opacity: 1 }, 800);
    });

    let authorElement = document.getElementById("author");
    $(authorElement).animate({ opacity: 0 }, 0, function () {
      $(this).animate({ opacity: 1 }, 800);
    });

    let sectionElement = document.getElementById("quote-box");
    $(sectionElement).animate({ opacity: 0 }, 0, function () {
      $(this).animate({ opacity: 1 }, 1000);
    });
  };

  const background = {
    backgroundColor: bgColor[randomBg],
  };

  // Use effect
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <section style={background} id="quote-box">
        <i class="fas fa-quote-left"></i>
        <div id="text">{currentQuote.text}</div>
        <div id="author">- {currentQuote.author}</div>
        <div className="buttons-div">
          <div className="socials">
            <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
              <i id="twitter" className="fab fa-twitter-square"></i>
            </a>
            <a href="facebook.com" target="_blank">
              <i id="facebook" className="fab fa-facebook-square"></i>
            </a>
          </div>

          <button onClick={getQuote} id="new-quote">
            New Quote
          </button>
        </div>
      </section>
    </div>
  );
}
