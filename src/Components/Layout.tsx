import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
type layoutProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (newValue: boolean) => void;
  toggleTheme: () => void;
};
export default function Layout({
  isLoggedIn,
  setIsLoggedIn,
  toggleTheme,
}: layoutProps) {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        toggleTheme={toggleTheme}
      />
      <Outlet />
      <Footer />
    </>
  );
}
