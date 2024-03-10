import React, { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

type HeaderProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (newValue: boolean) => void;
  toggleTheme: () => void;
};
export default function Header({
  isLoggedIn,
  setIsLoggedIn,
  toggleTheme,
}: HeaderProps) {
  const activeStyle: CSSProperties = {
    fontWeight: "bold",
    color: "orange",
    textDecoration: "underline",
  };
  function logout() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }
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
            <button onClick={toggleTheme}>Toggle Theme</button>
            <NavLink
              to="/Host"
              className="nav-links"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Host
            </NavLink>
            <NavLink
              to="/About"
              className="nav-links"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              About
            </NavLink>
            <NavLink
              to="/Vans"
              className="nav-links"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Vans
            </NavLink>
            {isLoggedIn ? (
              <NavLink
                to="/"
                className="nav-links"
                style={({ isActive }) => (isActive ? activeStyle : {})}
                onClick={logout}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/Login"
                className="nav-links"
                style={({ isActive }) => (isActive ? activeStyle : {})}
              >
                Login
              </NavLink>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
