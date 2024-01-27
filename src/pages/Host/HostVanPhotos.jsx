import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();

  return (
    <div className="hostVanPHotos-sections">
      <img
        style={{ maxHeight: "300px" }}
        src={currentVan.imageUrl}
        className="host-van-detail-image"
        alt={currentVan.name}
      />
    </div>
  );
}
