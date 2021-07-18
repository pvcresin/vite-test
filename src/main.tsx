import React from "react";
import ReactDOM from "react-dom";

import "./*.scss"; // index
import "./**/*.scss"; // components

import App from "@components/App";

import "./locales/*";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
