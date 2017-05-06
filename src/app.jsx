import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom';

import Routes from "./modules/Routes.jsx";

ReactDOM.render(
	<Routes />, document.getElementById("app-wrap")
);
