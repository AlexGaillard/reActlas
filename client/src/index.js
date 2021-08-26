import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App.jsx";
import "./styles/style.scss";

ReactDOM.render(
  <Suspense fallback={null}>
    <Router>
      <App />
    </Router>
  </Suspense>, document.getElementById("app"));
