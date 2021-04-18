import React, { useContext,useState } from 'react';
import {
    Link
} from "react-router-dom";
import { UserContext } from '../../../App';
import './Sidebar.css';
const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="dashboard-sidebar">
        <ul>
             { loggedInUser.email == 'programminghero001@gmail.com' && <div>
               <li>
                  <Link to="/allBookings">All Bookings</Link>
                </li>
                <li>
                  <Link to="/addServices">Add Services</Link>
                </li>
                <li>
                  <Link to="/manageServices">Manage Services</Link>               
            </li>
          </div>}
          
                <li>

                  <Link to="/bookings">My Bookings</Link>           
                </li>
                <li>
                  <Link to="/addReview">Add Review</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
