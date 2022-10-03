import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import TopNavBar from "./Components/TopNavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="/" element={<Home />} />
        <Route index path="/nav" element={<TopNavBar />} />
      </Route>
    </Routes>
  </Router>
);
