import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Abouts from "./pages/Abouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/abouts" element={<Abouts />} />
    </Routes>
  );
}

export default App;
