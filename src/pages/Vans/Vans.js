import React, { useEffect } from "react";
import { useSearchParams, Link, useLoaderData } from "react-router-dom";
import TypeBtn from "../../Components/Button/TypeBtn";
import { getVans } from "../../Components/apis";
// import "../App.css";
export function loader() {
  return getVans();
}

export default function Vans() {
  // const [vans, setVans] = React.useState([]);
  const [vansTypes, setVansType] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);
  const vans = useLoaderData();
  // console.log(data);
  // useEffect(() => {
  //   async function loadVans() {
  //     setLoading(true);
  //     try {
  //       const data = await getVans();
  //       setVans(data);
  //     } catch (err) {
  //       console.log("there was an error", err.message);
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //       console.log("End of loadVans");
  //     }
  //   }
  //   loadVans();
  // }, []);
  useEffect(() => {
    if (vans) {
      setVansType(Array.from(new Set(vans.map((van) => van.type))));
    }
  }, [vans]);

  //   to handle the error of not rendering the page before the array is fetched from data base

  // const vansElement = displayedVans.map((van) => (
  //   <li
  //     key={van.id}
  //     className="col-sm-6 col-md-4 col-lg-3  van-card "
  //     // style={{ maxHeight: "300px", maxWidth: "auto" }}
  //   >
  //     {/* <div className="van-card  "> */}
  //     <Link
  //       to={van.id}
  //       state={{ search: searchParams.toString() }}
  //       aria-label={`more description of the ${van.name} with the price of ${van.price}`}
  //       className=""
  //     >
  //       <div className="col-12 d-flex justify-content-center ">
  //         <img
  //           className="van-img"
  //           src={van.imageUrl}
  //           alt={`images of the ${van.name}`}
  //           style={{}}
  //         />
  //       </div>
  //       <div className="col-12 mt-1 d-flex justify-content-between van-name-price_container">
  //         <span className="fw-bold">{van.name}</span>
  //         <div className="d-flex align-items-end">
  //           <span className="fw-bold">{van.price}$</span>
  //           {/* <span className="d-inline-block">/Day</span> */}
  //         </div>
  //       </div>
  //       <div className="col-12 d-flex  justify-content-between mt-2">
  //         <TypeBtn van={van} /> <span className=" ">/Day</span>
  //       </div>
  //     </Link>
  //   </li>
  // ));

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

  // if (loading) {
  //   return (
  //     <h1 aria-live="polite" className="flex-grow-1 loading">
  //       Loading...
  //     </h1>
  //   );
  // }
  // if (error) {
  //   console.log("error is", error);
  //   return (
  //     <h1
  //       aria-live="assertive"
  //       className="error flex-grow-1"
  //     >{`There was an error: ${error.message}`}</h1>
  //   );
  // }
  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;
  console.log("displaye vans", displayedVans);
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
              {vansTypes.map((vanType) => (
                <li key={vanType}>
                  <span
                    className={
                      typeFilter === vanType
                        ? `filter-van-type bg-${vanType}`
                        : "filter-van-type"
                    }
                    onClick={() => {
                      handleFilterChange("type", vanType);
                      // setSearchParams({ type: vansType });
                    }}
                  >
                    {vanType}
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

        <ul className="row mt-3 mb-5 gy-5">
          {displayedVans &&
            displayedVans.map((van) => (
              <li
                key={van.id}
                className="col-sm-6 col-md-4 col-lg-3  van-card "
                // style={{ maxHeight: "300px", maxWidth: "auto" }}
              >
                {/* <div className="van-card  "> */}
                <Link
                  to={van.id}
                  state={{ search: searchParams.toString() }}
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
                  <div className="col-12 d-flex  justify-content-between mt-2">
                    <TypeBtn van={van} /> <span className=" ">/Day</span>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
