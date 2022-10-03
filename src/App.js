import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./Assets/CSS/All.css";
import TopNavBar from "./Components/TopNavBar";
export default function App() {
  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
