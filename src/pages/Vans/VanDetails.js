import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import "../server";
import { ArrowLeft } from "react-bootstrap-icons";
import classNames from "classnames";
import TypeBtn from "../../Components/Button/TypeBtn";
export default function VanDetails(props) {
  const params = useParams();
  const [van, setVan] = useState(null);
  console.log(params);
  console.log(props);

  function getBackgroundColorClass(type) {
    return classNames({
      "bg-simple": type === "simple",
      "bg-luxury": type === "luxury",
      "bg-rugged": type === "rugged",
    });
  }

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
    <div className="  vanDetails-container  flex-grow-1 pt-4 ">
      <Link
        to="/vans"
        aria-label={`Going back to the Vans page`}
        className="back-btn  "
      >
        <span className="ms-4 p-2">
          <ArrowLeft />
        </span>
        Back to all vans
      </Link>
      {van ? (
        <div className="vanDetail-card    mt-4 mb-5">
          <div style={{ display: "grid", placeItems: "center" }}>
            <img
              src={van.imageUrl}
              alt={van.name}
              // style={{ maxWidth: "500px", margin: "auto" }}
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
  );
}
