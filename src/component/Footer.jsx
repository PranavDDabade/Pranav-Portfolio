import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Pranav Dabade</h3>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skill">Skills</a>
          <a href="#project">Projects</a>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/pranavddabade" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/pranav-dabade-016179284"  target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:pranavddabade@gmail.com" target="_blank" rel="noreferrer">Email</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Pranav Dabade. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
