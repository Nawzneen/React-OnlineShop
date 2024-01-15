import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../App.css";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [vansType, setVansType] = React.useState([]);
  //   to handle the error of not rendering the page before the array is fetched from data base
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();
        console.log(data.vans); // Check the structure of the data
        setVans(data.vans);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  //   React.useEffect(() => {
  console.log("vans are", vans);
  let types = [];
  if (vans.length > 1) {
    types = Array.from(new Set(vans.map((van) => van.type)));
    console.log("types", types);
    // setVansType(types);
  }

  function filterType(type) {
    console.log("type filter is", type);
  }
  function getBackgroundColorClass(type) {
    switch (type) {
      case "simple":
        return "bg-simple";
      case "luxury":
        return "bg-luxury";
      case "rugged":
        return "bg-rugged";
      default:
        return "";
    }
  }
  return (
    <div className="van">
      <div className="container">
        <h2 className="fw-bold mt-5 ">Explore our van options</h2>
        <div className="d-flex  justify-content-between align-items-center mt-5">
          <div>
            <ul className="van-filter-li d-flex justify-content-start">
              {types.map((item) => (
                <li>
                  <span className="van-type" onClick={() => filterType(item)}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button className="clear-filter">Clear filter</button>
        </div>

        <ul className="row justify-content-center mt-5">
          {vans.map((van) => (
            <li key={van.id} className="mt-1 van-card-li">
              <div className="van-card row ">
                <div className="col-12 d-flex justify-content-center ">
                  <img
                    className="van-img"
                    src={van.imageUrl}
                    alt={van.name}
                    width=""
                  />
                </div>
                <div className="col-12 mt-1 d-flex justify-content-between van-name-price_container">
                  <span className="fw-bold">{van.name}</span>
                  <div className="d-flex flex-column align-items-end">
                    <span className="fw-bold">{van.price}$</span>
                    <span className="d-block">/Day</span>
                  </div>
                </div>
                <div className="col-12  van-type_container ">
                  <span
                    className={`van-type ${getBackgroundColorClass(van.type)}`}
                  >
                    {van.type}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
