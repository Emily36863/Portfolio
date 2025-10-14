import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";

/* ✅ global styles: import once, here */
import "./styles/reset.css";
import "./App.css";
import "./app-override.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
