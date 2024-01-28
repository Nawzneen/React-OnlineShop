import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import TypeBtn from "../../Components/Button/TypeBtn";
// import "../App.css";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [vansTypes, setVansType] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;
  //   to handle the error of not rendering the page before the array is fetched from data base

  const vansElement = displayedVans.map((van) => (
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
    setVansType(Array.from(new Set(vans.map((van) => van.type))));
  }, [vans]);

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="van-section">
      <div className="container">
        <h2 className="fw-bold mt-5 ">Explore our van options</h2>
        <div className="d-flex  justify-content-between align-items-center mt-5">
          <div
            className="
          van-filter-container"
          >
            <ul className="van-filter-li d-flex justify-content-start">
              {vansTypes.map((vansType) => (
                <li key={vansType}>
                  <span
                    className="filter-van-type"
                    onClick={() => {
                      handleFilterChange("type", vansType);
                      // setSearchParams({ type: vansType });
                    }}
                  >
                    {vansType}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {typeFilter ? (
            <button
              className="clear-filter"
              onClick={() => setSearchParams({})}
            >
              Clear filter
            </button>
          ) : null}
        </div>

        <ul className="row mt-3 mb-5 gy-5">{vansElement}</ul>
      </div>
    </div>
  );
}
