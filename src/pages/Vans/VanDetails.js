import React from "react";
import { useLocation, useParams, Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import TypeBtn from "../../Components/Button/TypeBtn";
import { getVans } from "../../Components/apis";
export function loader({ params }) {
  console.log(params);
  return getVans(params.id);
}
export default function VanDetails(props) {
  const location = useLocation();

  console.log("location is", location);
  const van = useLoaderData();
  console.log(props);

  return (
    <div className="vanDetails-container  flex-grow-1 pt-4 ">
      <Link
        to={location.state.search ? `..?${location.state.search}` : ".."}
        relative="path"
        aria-label={`Going back to the Vans page`}
        className="back-btn  "
      >
        <span className="ms-4 p-2">
          <ArrowLeft />
        </span>
        {location.state.search
          ? `Back to ${location.state.search.split("=")[1]} Vans `
          : "Back to all Vans"}
      </Link>
      {
        <div className="vanDetail-card    mt-4 mb-5">
          <div style={{ display: "grid", placeItems: "center" }}>
            <img
              src={van.imageUrl}
              alt={van.name}
              style={{ width: "100%" }}
              className="mt-4 mb-4"
            />
          </div>
          <TypeBtn van={van} />
          <h2 className="vanDetalis-name mt-4">{van.name}</h2>
          <span className="vanDetial-price">${van.price}/day</span>
          <p className="vanDetails-description">{van.description}</p>
          <button>Rent this Van</button>
        </div>
      }
    </div>
  );
}
