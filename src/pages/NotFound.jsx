import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-not-found ">
      <h1>
        Page not found! <br /> Sorry the page you are looking for is not
        available!
      </h1>
      <Link to="/">
        <button className="mt-5 ">Return to home</button>
      </Link>
    </div>
  );
}
