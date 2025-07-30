import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        <div className="testimonial-item">
          <p>"The team at Awesome Events was a pleasure to work with. They were professional, creative, and attentive to every detail."</p>
          <span>- Jane Doe</span>
        </div>
        <div className="testimonial-item">
          <p>"The food was absolutely delicious, and the service was impeccable. I would highly recommend Awesome Events to anyone looking for a top-notch catering experience."</p>
          <span>- John Smith</span>
        </div>
        <div className="testimonial-item">
          <p>"Awesome Events exceeded all of our expectations. They went above and beyond to make our event a success. We couldn't be happier with the results."</p>
          <span>- Emily Johnson</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
