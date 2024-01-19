import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    color: "orange",
    textDecoration: "underline",
  };

  return (
    <div className="host-layout">
      <div className="container mt-4">
        <nav className="host">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/Host"
          >
            Dashboard
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/Host/vans"
          >
            Vans
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/Host/income"
          >
            Income
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/Host/reviews"
          >
            Reviews
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
