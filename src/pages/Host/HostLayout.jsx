import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ThemeContext from "./themeContext.js";
export default function HostLayout() {
  const [theme, setTheme] = React.useState("dark");
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    console.log("the button is being clicked");
  }
  const activeStyle = {
    fontWeight: "bold",
    color: "orange",
    textDecoration: "underline",
  };

  return (
    <div className="host-layout">
      <div className="container mt-4">
        <nav className="host mb-4">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="."
            end
          >
            Dashboard
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="vans"
          >
            Vans
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="income"
          >
            Income
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
