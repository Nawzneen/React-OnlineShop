import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { ArrowLeft } from "react-bootstrap-icons";
import TypeBtn from "../../Components/Button/TypeBtn";
export default function VanDetails(props) {
  const params = useParams();
  const location = useLocation();

  console.log("location is", location);
  const [van, setVan] = useState(null);
  console.log(props);

  // function getBackgroundColorClass(type) {
  //   switch (type) {
  //     case "simple":
  //       return "bg-simple";
  //     case "luxury":
  //       return "bg-luxury";
  //     case "rugged":
  //       return "bg-rugged";
  //     default:
  //       return "";
  //   }
  // }

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(`/api/vans/${params.id}`);
    //     const data = await response.json();
    //     setVan(data.vans);
    //     console.log(data.vans);
    //   } catch (err) {
    //     console.log("the error is", err);
    //   }
    // };
    // fetchData();
  }, [params.id]);

  return (
    // <div className="container">
    <div className="vanDetails-container  flex-grow-1 pt-4 ">
      <Link
        to={location.state.search ? `..?${location.state.search}` : ".."}
        // to= '../${location.search}'
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
      {van ? (
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
      ) : (
        <h3 className="mt-5 mb-5">Loading...</h3>
      )}
    </div>
    // </div>
  );
}
