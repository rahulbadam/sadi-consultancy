import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const logo = require('../logo.png');
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <img src={logo} alt="ONWHEEL CATERING LIMITED" className="footer-logo" />
          <h4>ONWHEEL CATERING LIMITED</h4>
          <h5>Contact Us</h5>
          <p><i className="fas fa-phone"></i> <a href="tel:+447452880001">+44 74 52880001</a></p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:onwheelscatering6@gmail.com">onwheelscatering6@gmail.com</a></p>
          <h5>Our Address</h5>
          <p><i className="fas fa-map-marker-alt"></i> 77 Gammons lane, watford WD245HU</p>
        </div>
        <div className="footer-section">
          <h5>Key Pages</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Get Subscribed</h5>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email *" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-media">
            <button onClick={() => window.open('#', '_blank')}><i className="fab fa-facebook-f"></i></button>
            <button onClick={() => window.open('#', '_blank')}><i className="fab fa-instagram"></i></button>
            <button onClick={() => window.open('#', '_blank')}><i className="fab fa-tiktok"></i></button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© On-Wheel Catering 2025 | <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-and-conditions">Terms & Conditions</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
