import React from "react";
import { Outlet, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}