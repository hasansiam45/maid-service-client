import React from 'react';
import {
    Link
} from "react-router-dom";
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className="dashboard-sidebar">
            <ul>
                <li>
                  <Link to="/addServices">Add Services</Link>
                </li>
                <li>
                  <Link to="/addServices">Manage Services</Link>               
                </li>
                <li>
                  <Link to="/addServices">Bookings</Link>           
                </li>
                <li>
                  <Link to="/addServices">Add Review</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
