import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import "../server";
import { ArrowLeft } from "react-bootstrap-icons";
import classNames from 'classnames'

export default function VanDetails(props) {
  const params = useParams();
  const [van, setVan] = useState(null);
  console.log(params);
  console.log(props);

  function getBackgroundColorClass (type){
    return classNames({
      'bg-simple': type === 'simple',
      'bg-luxury': type === 'luxury',
      'bg-rugged': type === 'rugged',


  })}
  
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
    .then(response => response.json())
    .then(data=> setVan(data.vans))
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
    <div className="vanDetails-container  ">
      <Link
        to="/vans"
        aria-label={`Going back to the Vans page`}
        className="back-btn   "
      >
        <span className="p-1 mt-4">
          <ArrowLeft />
        </span>
        Back to all vans
      </Link>
 {van ?  <div className="container mt-4 mb-5">
<div>
  <img
    src={van.imageUrl}
    alt={van.name}
    width={`300px`}
    className="mt-4"
  />
</div>
<div className="col-12  van-type_container mt-5 ">
  <span className={`van-type ${getBackgroundColorClass(van.type)}`}>
    {van.type}
  </span>
</div>
<h2 className="vanDetalis-name">{van.name}</h2>
<span className="vanDetial-price">${van.price}/day</span>
<p className="vanDetails-description">{van.description}</p>
<button>Rent this Van</button>
</div> : (<h3 className="mt-5 mb-5">Loading...</h3>)  }
    </div>
  );
}
