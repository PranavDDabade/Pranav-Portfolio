import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbarr">
      {/* Left: Brand and Hamburger */}
      <div className="nav-header">
        <div className="brand"><span>Portfolio</span></div>
        <div className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          &#9776;
        </div>
      </div>

      {/* Right: Menu and Connect Button */}
      <div className="nav-right">
        <ul className={`nav-menu ${isMobileMenuOpen ? 'show' : ''}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>

        <a href="#contact" className="connectbtn">Connect with me</a>
      </div>
    </div>
  );
};

export default Navbar;
