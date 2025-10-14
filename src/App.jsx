import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Commodities from "./pages/Commodities";

export default function App() {
  return (
    <div className="overflow-x-hidden">  {/* ✅ Prevents white-space on mobile */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Commodities />} />
      </Routes>
    </div>
  );
}
