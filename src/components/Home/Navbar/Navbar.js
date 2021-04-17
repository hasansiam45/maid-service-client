import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
    <div className="bg-dark main-menu">
        <nav>
           <ul>
            <li className="mr-5">
              <Link to="/home">Home</Link>
            </li>
            <li className="mr-5">
              <Link to="/">Our Services</Link>
            </li>
            <li className="mr-5">
              <Link to="/addReview">Add Review</Link>
            </li>
                
            <li className="mr-5">
              <Link to="/login">Login</Link>
            </li>
                
            <li className="mr-5">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="mr-5">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
        

    </div>
    );
}

export default Navbar;
