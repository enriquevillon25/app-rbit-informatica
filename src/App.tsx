import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { BrowserRouter } from "react-router-dom";
import { HeaderComponent } from "./pages/components/HeaderComponent/HeaderComponent";
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      {/* <HomePage />; */}
    </BrowserRouter>
  );
}

export default App;
