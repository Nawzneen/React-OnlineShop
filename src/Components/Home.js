import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <h1>You got the travel plans, we got the travel vans</h1>
        <p>
          Add adventure to your life by joining the movement, Rent the perfect
          van to make your perfect roud trip.
        </p>
        <Link to="/vans" className="btn link-button">
          Find your van
        </Link>
      </div>
    </div>
  );
}
