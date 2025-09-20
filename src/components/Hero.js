import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="hero" ref={ref}>
      <h3 className={`animated ${inView ? 'visible fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
        Innovative IT Solutions for Modern Businesses
      </h3>
      <div className="hero-buttons">
        <Link to="/services" className={`hero-button animated ${inView ? 'visible slide-in-up' : ''}`} style={{ animationDelay: '1s' }}>Our Services</Link>
        <Link to="/gallery" className={`hero-button animated ${inView ? 'visible slide-in-up' : ''}`} style={{ animationDelay: '1.2s' }}>Projects</Link>
        <Link to="/contact" className={`hero-button animated ${inView ? 'visible slide-in-up' : ''}`} style={{ animationDelay: '1.4s' }}>Contact Us</Link>
      </div>
    </div>
  );
};

export default Hero;
