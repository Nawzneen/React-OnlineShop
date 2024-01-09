import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";

import Footer from "./Components/Footer";

// import App from "./App";
import reportWebVitals from "./reportWebVitals";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Home />
      <Footer />
    </div>
  );
}
function About() {
  return <h1> i am about</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
