import React from 'react';
import { useInView } from 'react-intersection-observer';
import './SecondaryPage.css';

const Parties = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="secondary-page">
      <h2>Party Catering</h2>
      <p>From birthdays to anniversaries, we provide the perfect catering for your party.</p>
      <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Party Food" />
      <div ref={ref} className={`animated ${inView ? 'visible slide-in-up' : ''}`}>
        <p>
          Our party catering services are designed to take the stress out of hosting. We offer a wide range of menu options to suit any occasion, from casual get-togethers to formal celebrations. Our team will work with you to create a menu that your guests will love, and our professional staff will ensure that your event runs smoothly.
        </p>
        <h3>We cater for all types of parties, including:</h3>
        <ul>
          <li>Birthday Parties</li>
          <li>Anniversary Parties</li>
          <li>Engagement Parties</li>
          <li>Retirement Parties</li>
          <li>Holiday Parties</li>
        </ul>
        <p>
          We can cater for parties of all sizes, and our flexible menu options can be tailored to your specific needs. Whether you're looking for a simple buffet or a multi-course meal, we have you covered. We also offer bar services, including a range of beers, wines, and cocktails. Contact us today to discuss your party catering needs.
        </p>
      </div>
    </div>
  );
};

export default Parties;
