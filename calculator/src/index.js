import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App displayValue={7} />
  </React.StrictMode>,
  document.getElementById("root")
);
