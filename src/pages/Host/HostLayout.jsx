import React from "react"
import {Link, Outlet} from "react-router-dom"

export default function HostLayout(){

    return (
        < >
        <div className="container mt-4"> 
            <nav className="host">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
             </nav>
    <Outlet/>
    </div>
    </>
    
    )
}