import React from "react";
import ReactDOM from "react-dom/client";
import Shop from "./Shop";

const App = () => (
  <div>
    <Shop/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)