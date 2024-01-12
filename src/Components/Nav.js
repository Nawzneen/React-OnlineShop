import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../App.css";

export default function Nav() {
  return (
    <nav className="nav-container ">
      #VANLIFE
      <div className="nav-links">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
      </div>
    </nav>
  );
}
