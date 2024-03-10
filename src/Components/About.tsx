import React from "react";
import "../App.css";
import aboutPageImage from "../Images/about-page.png";
import { Link } from "react-router-dom";
type AboutPageImageType = typeof aboutPageImage;
export default function About() {
  return (
    <div className="about">
      <div className="img-container">
        <img
          src={aboutPageImage as AboutPageImageType}
          alt="About Page"
          className="about-img"
        />
      </div>

      <div className="container about-container  mt-4">
        <div className="about-description">
          <h3>Dont squeez in a Sedan when you can relax in a van</h3>
          <p>
            Our vision is to enliven your road trip with the perfect travel van
            rental. our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch which costs extra.
            <br />
            Our Team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4wheels.
          </p>
          <div className="about-card">
            <h3>Your destination is waiting. Your van is ready.</h3>
            <Link to="/vans" className="btn link-button">
              Explore our vans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
