import React from 'react';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="public/assets/logo.png" alt="Logo" className="logo-image" />
        <span className="brand-name">Untitled UI</span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li className="nav-dropdown">
          <a href="#">Products</a>
          <ul className="dropdown-content">
            <li><a href="#">Theme</a></li>
            <li><a href="#">Category</a></li>
          </ul>
        </li>
        <li className="nav-dropdown">
          <a href="#">Resources</a>
          <ul className="dropdown-content">
            <li><a href="#">Articles</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </li>
        <li><a href="#">Pricing</a></li>
      </ul>
      <div className="profile">
        <img src="public/assets/profile.png" alt="profile" className="profile-image" />
      </div>
      <hr className="divider"/>
    </nav>
  );
}

export default Navbar;
