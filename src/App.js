import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import Sponsors from "./Components/Sponsors/Sponsors";

function App() {
  return (
    <>
      {/* <HomePage/> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="sponsors" element={<Sponsors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
