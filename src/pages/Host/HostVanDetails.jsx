import React from "react";
import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
import TypeBtn from "../../Components/Button/TypeBtn";
import { getHostVans } from "../../apis";
import { requireAuth } from "../../utils";
export async function loader({ params }) {
  await requireAuth();
  const id = params.id;
  return getHostVans(id);
}
export default function HostVanDetail() {
  // [0] is added because the server returns an array instead of the object intself
  const currentVan = useLoaderData()[0];
  console.log(currentVan);

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <section className="hostVanDetails-section">
      <Link to=".." relative="path" className="back-button ">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container mt-4">
        <div className="host-van-detail ">
          <img src={currentVan.imageUrl} alt={currentVan.name} />
          <div className="host-van-detail-info-text">
            <TypeBtn van={currentVan} />

            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <div className="mt-4 mb-4">
          <NavLink
            to="."
            end
            className="pr-3  me-4 text-dark"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className="pr-3  me-4 text-dark"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className="pr-3  me-4 text-dark"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photos
          </NavLink>
        </div>

        <Outlet context={{ currentVan: currentVan }} />
      </div>
    </section>
  );
}
