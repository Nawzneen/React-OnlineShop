import React from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../apis";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
  console.log("req in host vans is", request);
  await requireAuth(request);
  return defer({ hostVans: getHostVans() });
}
export default function HostVans() {
  const liStyle = {
    backgroundColor: "white",
    padding: "15px",
  };
  const hostVansPromise = useLoaderData();
  function renderHostVansElements(hostVans) {
    const hostVansEl = hostVans.map((van) => (
      <Link
        className=" col-12 col-md-6  "
        to={`${van.id}`}
        aria-label={`more description of the ${van.name} with the price of ${van.price}`}
        key={van.id}
      >
        <li
          className="row jsutify-content-center gx-1  "
          style={liStyle}
          key={van.id}
        >
          <img
            src={van.imageUrl}
            alt={van.name}
            className="col-3 col-md-4"
            style={{
              maxWidth: "300px",
            }}
          />
          <div className="van-info col-6 ms-4">
            <span className="d-block fw-bold">{van.name}</span>
            <span className="d-block">${van.price}/Day</span>
          </div>
        </li>
      </Link>
    ));
    return (
      <ul className="row gx-5 gy-4 justify-content-between mt-5">
        {hostVansEl}
      </ul>
    );
  }
  return (
    <div className="hostVans-section">
      <h2 className="mt-5">Your Listed Vans</h2>
      <React.Suspense fallback={<h3>Host Vans are loading...</h3>}>
        <Await resolve={hostVansPromise.hostVans}>
          {renderHostVansElements}
        </Await>
      </React.Suspense>
    </div>
  );
}
