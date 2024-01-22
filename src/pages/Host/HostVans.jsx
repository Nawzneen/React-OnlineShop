import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const liStyle = {
    backgroundColor: "white",
    padding: "15px",
  };
  const [hostVans, setHostVans] = React.useState([]);
  const hostId = "123";
  React.useEffect(() => {
    fetch(`/api/host/vans?hostId=${hostId}`)
      .then((response) => response.json())
      .then((data) => setHostVans(data.vans))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="hostVans">
      <h2>Your Listed Vans</h2>
      <ul className="row justify-content-between">
        {hostVans.map((van) => (
          <Link
            to={`${van.id}`}
            aria-label={`more description of the ${van.name} with the price of ${van.price}`}
          >
            <li
              className="row col-md-6 col-12 mt-4 "
              style={liStyle}
              key={van.id}
            >
              <img
                src={van.imageUrl}
                alt={van.name}
                className="col-3 col-md-4"
              />
              <div className="van-info col-6">
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
