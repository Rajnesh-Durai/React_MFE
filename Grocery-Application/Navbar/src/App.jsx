import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Navbar from "./Navbar";
import HomePage from "HomePageMFE/HomePage";
import Shop from "ShopPageMFE/ShopPage"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => (
  <div>
    <BrowserRouter>
    
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)