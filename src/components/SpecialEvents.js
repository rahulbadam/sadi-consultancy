import React from 'react';
import { useInView } from 'react-intersection-observer';
import './SecondaryPage.css';

const SpecialEvents = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="secondary-page">
      <h2>Special Events Catering</h2>
      <p>We cater for all special occasions, including holidays, festivals, and more.</p>
      <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Special Events Food" />
      <div ref={ref} className={`animated ${inView ? 'visible slide-in-up' : ''}`}>
        <p>
          No matter the occasion, we have the perfect catering solution for you. We have experience catering for a wide range of special events, from intimate family gatherings to large-scale festivals. Our team will work with you to create a menu that is tailored to your event, and our professional staff will ensure that your guests have an unforgettable experience.
        </p>
        <p>
          We can cater for a variety of special events, including:
        </p>
        <ul>
          <li>Holiday Parties (Christmas, New Year's, etc.)</li>
          <li>Birthday Celebrations</li>
          <li>Anniversary Dinners</li>
          <li>Graduation Parties</li>
          <li>Summer Barbecues</li>
          <li>And much more!</li>
        </ul>
        <p>
          Our flexible menu options can be tailored to your specific requirements, and we can accommodate any dietary restrictions. We also offer a range of additional services, such as bar service, equipment rental, and event staffing, to make your special event a truly memorable occasion. Contact us today to learn more about our special events catering services.
        </p>
      </div>
    </div>
  );
};

export default SpecialEvents;
