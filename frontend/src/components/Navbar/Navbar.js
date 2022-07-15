import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar">
        <h1 className="logo">Online Gallery</h1>
        <ul>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/search`}>Search</Link></li>
        </ul>
    </div>
  );
};

export default Navbar;
