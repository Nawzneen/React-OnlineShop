import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ isLoggedIn, setIsloggedIn }) {
  console.log("the state of the logged in is ", isLoggedIn);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} />
      <Outlet />
      <Footer />
    </>
  );
}
