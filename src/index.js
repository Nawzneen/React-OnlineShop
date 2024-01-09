import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
function About() {
  return <h1> i am about</h1>;
}
function Home() {
  return <h1> i am home</h1>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
