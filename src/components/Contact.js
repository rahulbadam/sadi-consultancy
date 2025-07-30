import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>We would love to hear from you. Please contact us using the details below, or fill out the form to send us a message.</p>
      <div className="contact-details">
        <p><strong>Phone:</strong> +447452880001</p>
        <p><strong>Email:</strong> info@onwheelcatering.com</p>
        <p><strong>Address:</strong> 77 Gammons lane watford WD245HU</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
