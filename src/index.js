import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home.js';
import Principal from './pages/Principal.js';

ReactDOM.render(
    <div>
      <App/>
    </div>,
  document.getElementById("root")
);
