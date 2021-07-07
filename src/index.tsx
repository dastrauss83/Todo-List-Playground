import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";

ReactDOM.render(
  <div className="body">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>,
  document.getElementById("root")
);
