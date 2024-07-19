// src/search/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
}

export default Navbar;
