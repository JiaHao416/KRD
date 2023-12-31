import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Abouts from "./pages/Abouts/Abouts";
import All from "./pages/Products/All/All";
import New from "./pages/Products/New/New";
import Micgo from "./pages/Products/Micgo/Micgo";
import Krd from "./pages/Products/Krd/Krd";
import WiredMicphone from "./pages/Products/WiredMicphone/WiredMicphone";
import WirelessMicphone from "./pages/Products/WirelessMicphone/WirelessMicphone";
import Trumpet from "./pages/Products/Trumpet/Trumpet";
import Accessories from "./pages/Products/Accessories/Accessories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/abouts" element={<Abouts />} />
      <Route path="/all-products" element={<All />} />
      <Route path="/new-products" element={<New />} />
      <Route path="/micgo-products" element={<Micgo />} />
      <Route path="/krd-products" element={<Krd />} />
      <Route path="/wired-micphone" element={<WiredMicphone />} />
      <Route path="/wireless-micphone" element={<WirelessMicphone />} />
      <Route path="/trumpet" element={<Trumpet />} />
      <Route path="/accessories" element={<Accessories />} />
    </Routes>
  );
}

export default App;
