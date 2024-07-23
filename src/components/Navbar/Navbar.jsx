import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css';
import 'boxicons/css/boxicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'glidejs/dist/css/glide.core.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header" id="header">
      <div className="navigation">
        <div className="nav-center container d-flex">
          <Link to="/" className="logo">
            <img src="./src/assets/images/Logo.svg" alt="Logo" />
          </Link>
          <ul className={`nav-list d-flex ${isNavOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/men" className="nav-link">Men</Link>  
            </li>
            <li className="nav-item">
              <Link to="/women" className="nav-link">Women</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Combos</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Joger</Link>
            </li>
            <div className="search-box">
              <button><i className="fas fa-search"></i></button>
              <input type="text" placeholder="Search..." />
            </div>
            <li className="icons d-flex">
              <Link to="responsiveht.html" className="icon">
                <i className="bx bx-user"></i>
              </Link>
              <div className="icon">
                <i className="bx bx-heart"></i>
                <span className="d-flex">0</span>
              </div>
              <Link to="#" className="icon">
                <i className="bx bx-cart"></i>
                <span className="d-flex">0</span>
              </Link>
            </li>
          </ul>
          <div className="icons d-flex">
            <Link to="responsiveht.html" className="icon">
              <i className="bx bx-user"></i>
            </Link>
            <div className="icon">
              <i className="bx bx-heart"></i>
              <span className="d-flex">0</span>
            </div>
            <Link to="#" className="icon">
              <i className="bx bx-cart"></i>
              <span className="d-flex">0</span>
            </Link>
          </div>
          <div className="hamburger" onClick={handleHamburgerClick}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
