import React from "react";

export default function HostVans() {
  const liStyle = {
    width: "300px",
    backgroundColor: "white",
    padding: "15px",
  };

  return (
    <div className="hostVans">
      <h1>Your Listed Vans</h1>
      <ul>
        <li className="row m-4" style={liStyle}>
          <img alt="van namee" className="col-6" />
          <div className="van-info col-6">
            <span className="d-block">Van Name</span>
            <span className="d-block">Price / Day</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
