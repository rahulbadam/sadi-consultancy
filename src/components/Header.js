import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="contact-info">
          <span>ONWHEEL CATERING LIMITED <a href="tel:+447452880001">+447452880001</a> | <a href="mailto:info@onwheelcatering.com">info@onwheelcatering.com</a></span>
        </div>
        <div className="social-media">
          <button onClick={() => window.open('#', '_blank')}>
            <i className="fab fa-facebook-f"></i>
          </button>
          <button onClick={() => window.open('#', '_blank')}>
            <i className="fab fa-instagram"></i>
          </button>
          <button onClick={() => window.open('#', '_blank')}>
            <i className="fab fa-tiktok"></i>
          </button>
        </div>
        <Link to="/contact" className="enquire-now">Get a Quote</Link>
      </div>
      <div className="main-header">
        <Link to="/"><img src={logo} alt="ONWHEEL CATERING LIMITED" className="logo" /></Link>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
        <nav className={isOpen ? 'nav-open' : ''}>
          <ul>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
