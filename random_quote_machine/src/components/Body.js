import React from "react";
import { useState, useEffect } from "react";
import style from "../style/style.css";
import resets from "../style/resets.css";

export default function Body() {
  const [currentQuote, setQuote] = useState("");

  const getQuote = () => {
    // random number
    let randomNumber = Math.floor(Math.random() * 100);
    // fetch
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuote(data[randomNumber]));
  };

  // Use effect
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <section id="quote-box">
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
