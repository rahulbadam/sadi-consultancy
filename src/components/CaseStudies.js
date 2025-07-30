import React from 'react';
import './SecondaryPage.css';

const CaseStudies = () => {
  return (
    <div className="secondary-page">
      <h2>Case Studies</h2>
      <p>
        Check out some of our past events and see how we've helped our clients create unforgettable experiences.
      </p>
      <div style={{marginTop: '40px'}}>
        <h3>A Summer Wedding in the Countryside</h3>
        <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wedding" />
        <p>
          We had the pleasure of catering for a beautiful summer wedding in the countryside. The couple wanted a relaxed and informal atmosphere, so we created a menu of delicious sharing platters and canapés. The guests loved the food, and the event was a huge success.
        </p>
      </div>
      <div style={{marginTop: '40px'}}>
        <h3>A Corporate Product Launch</h3>
        <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Corporate Event" />
        <p>
          We were asked to cater for a corporate product launch for a major tech company. We created a menu of canapés and bowl food that was both delicious and visually impressive. The event was a great success, and we received fantastic feedback from the client.
        </p>
      </div>
    </div>
  );
};

export default CaseStudies;
