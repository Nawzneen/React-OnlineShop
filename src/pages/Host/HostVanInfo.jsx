import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { currentVan } = useOutletContext();
  return (
    <div className="hostVanInfo-section">
      <p className="mt-4">
        <span className="fw-bold">Name: </span> {currentVan.name}
      </p>
      <p className="mt-4">
        <span className="fw-bold">Category: </span>
        {currentVan.type}
      </p>
      <p className="mt-4">
        <span className="fw-bold">Description: </span>
        {currentVan.description}
      </p>
      <p className="mt-4">
        <span className="fw-bold">Visibility: </span>
        {currentVan.visibility}
      </p>
    </div>
  );
}
