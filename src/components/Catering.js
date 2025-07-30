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
          <Link to="/weddings">
            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wedding Catering" />
            <h3>Weddings</h3>
          </Link>
        </div>
        <div className="catering-item">
          <Link to="/parties">
            <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Private Party Catering" />
            <h3>Parties</h3>
          </Link>
        </div>
        <div className="catering-item">
          <Link to="/corporate">
            <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Corporate Event Catering" />
            <h3>Corporate</h3>
          </Link>
        </div>
        <div className="catering-item">
          <Link to="/special-events">
            <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Special Events Catering" />
            <h3>Special Events</h3>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Catering;
