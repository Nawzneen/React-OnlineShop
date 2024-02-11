import React, { useEffect } from "react";
import {
  useSearchParams,
  Link,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import TypeBtn from "../../Components/Button/TypeBtn";
import { getVans } from "../../apis";
export function loader() {
  const getVansPromis = getVans();

  return defer({ vans: getVansPromis });
}

export default function Vans() {
  const [vansTypes, setVansType] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const vansPromise = useLoaderData();

  // Finding the types from the data dynamically
  // I am not sure if this code is currect
  useEffect(() => {
    vansPromise.vans.then((vansData) => {
      setVansType(vansData);
      setVansType(Array.from(new Set(vansData.map((van) => van.type))));
    });
  }, [vansPromise]);

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

  function renderVanElements(vans) {
    // Getting filtered van
    const typeFilter = searchParams.get("type");
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;
    return (
      <>
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
              >
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
                    </div>
                  </div>
                  <div className="col-12 d-flex  justify-content-between mt-2">
                    <TypeBtn van={van} /> <span className=" ">/Day</span>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </>
    );
  }
  return (
    <div className="van-section">
      <div className="container">
        <h2 className="fw-bold mt-5 ">Explore our van options</h2>
        <React.Suspense fallback={<h2>Loading Vans...</h2>}>
          <Await resolve={vansPromise.vans}>{renderVanElements}</Await>
        </React.Suspense>
      </div>
    </div>
  );
}
