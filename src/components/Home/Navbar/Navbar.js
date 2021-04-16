import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
    <div className="bg-dark main-menu">
        <nav>
           <ul>
            <li className="mr-5">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-5">
              <Link to="/about">Our Services</Link>
            </li>
            <li className="mr-5">
              <Link to="/users">Review</Link>
            </li>
                
            <li className="mr-5">
              <Link to="/users">Login</Link>
            </li>
                
            <li className="mr-5">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="mr-5">
              <Link to="/users">Contact</Link>
            </li>
          </ul>
        </nav>
    </div>
    );
}

export default Navbar;
