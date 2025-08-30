import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>

        {/* Dropdown for Academics */}
        <li className="dropdown">
          <span className="dropdown-title">Academics ▾</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/education" onClick={closeMenu}>Education</Link>
            </li>
            <li>
              <Link to="/internships" onClick={closeMenu}>Internships</Link>
            </li>
            <li>
              <Link to="/certifications" onClick={closeMenu}>Certifications</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
        </li>

        <li>
          <Link to="/skills" onClick={closeMenu}>Skills</Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
