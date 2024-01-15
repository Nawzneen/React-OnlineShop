import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../App.css";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  //   to handle the error of not rendering the page before the array is fetched from data base
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();
        console.log(data.vans); // Check the structure of the data
        setVans(data.vans);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  //   React.useEffect(() => {
  //     fetch("/api/vans")
  //       .then((res) => res.json())
  //       .then((data) => setVans(data.vans));
  //   }, []);
  return (
    <div className="van">
      <div className="container">
        <p>Here you can see the list of our vans</p>
        <ul>
          {vans.map((van) => (
            <li key={van.id}>
              <div>
                <h6>{van.name}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
