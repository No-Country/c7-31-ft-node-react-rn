import React from "react";
import ReactDOM from "react-dom/client";
import { SessionProvider } from "./contexts/SessionContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SessionProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={"hola mundo"} />
      </Routes>
    </BrowserRouter>
  </SessionProvider>
);
