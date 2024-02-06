import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Error from "./Components/Error";

import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetails, { loader as vanDetailLoader } from "./pages/Vans/VanDetails";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./pages/Host/HostLayout.jsx";
import HostVans, { loader as vansHostLoader } from "./pages/Host/HostVans.jsx";
import HostVanDetails from "./pages/Host/HostVanDetails.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login";

import "./server";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />

        <Route index end element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans">
          <Route
            index
            element={<Vans />}
            loader={vansLoader}
            errorElement={<Error />}
          />
          <Route
            path=":id"
            element={<VanDetails />}
            loader={vanDetailLoader}
            errorElement={<Error />}
          />
        </Route>
        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="vans"
            element={<HostVans />}
            loader={vansHostLoader}
            errorElement={<Error />}

            // loader={async () => {
            //   return null;
            // }}
          />
          <Route
            path="vans/:id"
            element={<HostVanDetails />}
            loader={async () => {
              return null;
            }}
          >
            <Route
              index
              element={<HostVanInfo />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="pricing"
              element={<HostVanPricing />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async () => {
                return null;
              }}
            />
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
