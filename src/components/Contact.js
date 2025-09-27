import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact SADI IT CONSULTANCY LTD</h2>
      <p>We are here to help you with your IT needs. Reach out to us using the details below, or fill out the form to request a consultation or more information.</p>
      <div className="contact-details">
        <p><strong>Phone:</strong> 7452880001</p>
        <p><strong>Email:</strong> sadiitconsultancy@gmail.com</p>
        <p><strong>Address:</strong> 8a Langley road, WD17 4PT, Watford</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Company Name (optional)" />
        <textarea placeholder="How can we help you?" rows="5" required></textarea>
        <button type="submit">Request Consultation</button>
      </form>
    </div>
  );
};

export default Contact;
