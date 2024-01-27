import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TypeBtn from "../../Components/Button/TypeBtn";
// import "../App.css";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [vansType, setVansType] = React.useState([]);
  const [filteredVans, setFilteredVans] = React.useState([]);
  const [isFilterOn, setIsFilterOn] = React.useState(false);
  //   to handle the error of not rendering the page before the array is fetched from data base

  const vansElement = vans.map((van) => (
    <li
      key={van.id}
      className="col-sm-6 col-md-4 col-lg-3  van-card "
      // style={{ maxHeight: "300px", maxWidth: "auto" }}
    >
      {/* <div className="van-card  "> */}
      <Link
        to={`${van.id}`}
        aria-label={`more description of the ${van.name} with the price of ${van.price}`}
        className=""
      >
        <div className="col-12 d-flex justify-content-center ">
          <img
            className="van-img"
            src={van.imageUrl}
            alt={`images of the ${van.name}`}
            style={{}}
          />
        </div>
        <div className="col-12 mt-1 d-flex justify-content-between van-name-price_container">
          <span className="fw-bold">{van.name}</span>
          <div className="d-flex align-items-end">
            <span className="fw-bold">{van.price}$</span>
            {/* <span className="d-inline-block">/Day</span> */}
          </div>
        </div>
        <div className="col-12 d-flex  justify-content-between">
          <TypeBtn van={van} /> <span className=" ">/Day</span>
        </div>
      </Link>
      {/* </div> */}
    </li>
  ));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();
        console.log(data.vans); // Check the structure of the data
        setVans(data.vans);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const vansType = Array.from(new Set(vans.map((van) => van.type)));
    setVansType(vansType);
  }, [vans]);
  // useEffect(() => {
  //   function filterType(type) {
  //     setFilteredVans(vans.filter((van) => van.type === type));
  //   }
  // }, [filteredVans]);
  function filterType(type) {
    console.log("is filter on", isFilterOn);
    setFilteredVans(vans.filter((van) => van.type === type));
    console.log("filtervans are", filteredVans);
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
  const vansToRender = isFilterOn ? filteredVans : vans;
  return (
    <div className="van-section">
      <div className="container">
        <h2 className="fw-bold mt-5 ">Explore our van options</h2>
        <div className="d-flex  justify-content-between align-items-center mt-5">
          <div>
            <ul className="van-filter-li d-flex justify-content-start">
              {vansType.map((item) => (
                <li key={item}>
                  <span
                    className="van-type"
                    onClick={() => {
                      filterType(item);
                      setIsFilterOn(true);
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button className="clear-filter" onClick={() => setIsFilterOn(false)}>
            Clear filter
          </button>
        </div>

        <ul className="row mt-3 mb-5 gy-5">{vansElement}</ul>
      </div>
    </div>
  );
}
