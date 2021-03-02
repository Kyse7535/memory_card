import "bootstrap/dist/css/bootstrap.min.css";
//import $ from "jquery";
//import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module

import Listcard from "./listcard";

ReactDOM.render(
	<React.StrictMode>
		<Listcard />
	</React.StrictMode>,
	document.getElementById("root"),
);
