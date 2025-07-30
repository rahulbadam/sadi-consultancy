import React from 'react';
import { useInView } from 'react-intersection-observer';
import './SecondaryPage.css';

const Corporate = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="secondary-page">
      <h2>Corporate Catering</h2>
      <p>Impress your clients and colleagues with our professional corporate catering services.</p>
      <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Corporate Food" />
      <div ref={ref} className={`animated ${inView ? 'visible slide-in-up' : ''}`}>
        <p>
          We understand the importance of making a good impression in the corporate world. That's why we offer a range of corporate catering services to suit your needs, from breakfast meetings to product launches. Our team will work with you to create a menu that is both delicious and professional, and our experienced staff will ensure that your event is a success.
        </p>
        <h3>Our corporate catering services are perfect for:</h3>
        <ul>
          <li>Business Lunches</li>
          <li>Conferences and Seminars</li>
          <li>Product Launches</li>
          <li>Office Parties</li>
          <li>Team Building Events</li>
        </ul>
        <p>
          We can provide catering for a variety of corporate events, including conferences, seminars, and office parties. Our flexible menu options can be tailored to your specific requirements, and we can accommodate any dietary restrictions. We also offer delivery and setup services to make your event planning as easy as possible. Contact us today to learn more about our corporate catering services.
        </p>
      </div>
    </div>
  );
};

export default Corporate;
