import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HomePage />;
    </BrowserRouter>
  );
}

export default App;
