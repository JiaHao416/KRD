import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <HashRouter>
    <App />
  </HashRouter>
);

reportWebVitals();
