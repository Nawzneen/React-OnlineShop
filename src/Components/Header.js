import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    color: "orange",
    textDecoration: "underline",
  };
  return (
    <>
      <header className="">
        <nav className="nav-container container-float d-flex justify-content-between align-items-center ">
          <NavLink
            className="text-logo"
            to="/"
            end
            // style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            #VANLIFE
          </NavLink>
          <div className="nav-NavLinks">
            <NavLink
              to="/Host"
              className="nav-links"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Host
            </NavLink>
            <NavLink
              to="/About"
              className="nav-links"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              About
            </NavLink>
            <NavLink
              to="/Vans"
              className="nav-links"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Vans
            </NavLink>
            <NavLink
              to="/Login"
              className="nav-links"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Login
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}
