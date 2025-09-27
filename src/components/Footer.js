import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const logo = require('../logo.png');
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <img src={logo} alt="SADI IT CONSULTANCY LTD" className="footer-logo" />
          <h4>SADI IT CONSULTANCY LTD</h4>
          <h5>Contact Us</h5>
          <p><i className="fas fa-phone"></i> <a href="tel:+441234567890">7452880001</a></p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:sadiitconsultancy@gmail.com">sadiitconsultancy@gmail.com</a></p>
          <h5>Our Address</h5>
          <p><i className="fas fa-map-marker-alt"></i> 8a Langley road, WD17 4PT, Watford</p>
        </div>
        <div className="footer-section">
          <h5>Key Pages</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Projects</Link></li>
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
            <button onClick={() => window.open('https://www.linkedin.com/company/sadiitconsultancy', '_blank')}><i className="fab fa-linkedin-in"></i></button>
            <button onClick={() => window.open('https://twitter.com/sadiitconsultancy', '_blank')}><i className="fab fa-twitter"></i></button>
            <button onClick={() => window.open('https://github.com/sadiitconsultancy', '_blank')}><i className="fab fa-github"></i></button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© SADI IT CONSULTANCY LTD 2025 | <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-and-conditions">Terms & Conditions</Link></p>
        <p>Empowering your business with technology solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;
