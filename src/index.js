import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans from "./Components/Vans";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./pages/Host/HostLayout.jsx";




import VanDetails from "./Components/VanDetails";

import "./server";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetails />}></Route>
            <Route path="/host" element={<HostLayout />}>
                <Route path="/host/income" element={<Income />} />
                <Route path="/host/reviews" element={<Reviews />} />    
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
