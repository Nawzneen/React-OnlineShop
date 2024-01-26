import React from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, []);

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="hostVanDetails-section">
      <Link to=".." relative="path" className="back-button ">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container mt-4">
        <div className="host-van-detail ">
          <img src={currentVan.imageUrl} alt={currentVan.name} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
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

        <Outlet />
      </div>
    </section>
  );
}
