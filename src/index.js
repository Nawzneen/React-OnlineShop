import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";

import Footer from "./Components/Footer";

// import App from "./App";
import reportWebVitals from "./reportWebVitals";
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
