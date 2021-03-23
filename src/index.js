import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Listcard from "./listcard";

ReactDOM.render(
  <React.StrictMode>
    <Listcard />
  </React.StrictMode>,
  document.getElementById("root")
);
