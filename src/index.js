import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./pages/Host/HostLayout.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanDetails from "./pages/Host/HostVanDetails.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./server";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
        <Route index end element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans">
          <Route index element={<Vans />} />
          <Route path=":id" element={<VanDetails />} />
        </Route>
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetails />}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>

          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    )
  );
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
