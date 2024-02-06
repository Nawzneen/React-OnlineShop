import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../Components/apis";
export function loader() {
  return getHostVans();
}
export default function HostVans() {
  const liStyle = {
    backgroundColor: "white",
    padding: "15px",
  };
  // const [hostVans, setHostVans] = React.useState([]);
  const hostVans = useLoaderData();
  const hostId = "123";
  // React.useEffect(() => {
  //   fetch(`/api/host/vans?hostId=${hostId}`)
  //     .then((response) => response.json())
  //     .then((data) => setHostVans(data.vans))
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <div className="hostVans-section">
      <h2 className="mt-5">Your Listed Vans</h2>
      <ul className="row gx-5 gy-4 justify-content-between mt-5">
        {hostVans.map((van) => (
          <Link
            className=" col-12 col-md-6  "
            to={`${van.id}`}
            aria-label={`more description of the ${van.name} with the price of ${van.price}`}
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
                  // overflow: "auto",
                }}
              />
              <div className="van-info col-6 ms-4">
                <span className="d-block fw-bold">{van.name}</span>
                <span className="d-block">${van.price}/Day</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
