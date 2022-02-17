import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ArraysLP from "./ArraysLP";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <App />
    <ArraysLP />
  </div>,
  rootElement
);
