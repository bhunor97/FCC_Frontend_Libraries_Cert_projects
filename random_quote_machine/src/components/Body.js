import React from "react";
import { useState, useEffect } from "react";
import style from "../style/style.css";
import resetes from "../style/resets.css";

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
        <div id="text">{currentQuote.text}</div>
        <div id="author">{currentQuote.author}</div>
        <button onClick={getQuote} id="new-quote">
          Get a new quote
        </button>
        <a href="#" id="tweet-quote">
          Tweet quote
        </a>
      </section>
    </div>
  );
}

// User Story #6:
// User Story #7:
