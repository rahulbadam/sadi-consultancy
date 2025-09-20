import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Catering.css';

const Catering = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="catering-container">
      <Slider {...settings}>
        <div className="catering-item">
          <Link to="/services">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=compress&w=800&q=80" alt="Cloud Solutions" />
            <h3>Cloud Solutions</h3>
          </Link>
        </div>
        <div className="catering-item">
          <Link to="/services">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=800&q=80" alt="Cybersecurity" />
            <h3>Cybersecurity</h3>
          </Link>
        </div>
        <div className="catering-item">
          <Link to="/services">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=compress&w=800&q=80" alt="Software Development" />
            <h3>Software Development</h3>
          </Link>
        </div>
        <div className="catering-item">
          <Link to="/services">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=compress&w=800&q=80" alt="IT Support" />
            <h3>IT Support</h3>
          </Link>
        </div>
        <div className="catering-item">
          <Link to="/services">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=compress&w=800&q=80" alt="Digital Transformation" />
            <h3>Digital Transformation</h3>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Catering;
