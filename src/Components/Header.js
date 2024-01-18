import React from "react";
import {  Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <>
    <header className="">
      <nav className="nav-container container-float d-flex justify-content-between align-items-center ">
        <Link className="text-logo" to="/Home">
          #VANLIFE
        </Link>
        <div className="nav-links">
          <Link to="/Host" className="nav-links">
            Host
          </Link>
          <Link to="/About" className="nav-links">
            About
          </Link>
          <Link to="/Vans" className="nav-links">
            Vans
          </Link>
        </div>
      </nav>
    </header>

    </>
  );
}
