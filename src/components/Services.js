import React from 'react';
import { useInView } from 'react-intersection-observer';
import './SecondaryPage.css';

const Services = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="secondary-page">
      <h2>Our Services</h2>
      <p>We offer a wide range of services to make your event a success. From intimate dinners to large corporate events, we have you covered.</p>
      
      <div ref={ref1} className={`animated ${inView1 ? 'visible slide-in-up' : ''}`} style={{marginTop: '40px'}}>
        <h3>Wedding Catering</h3>
        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wedding Food" />
        <p>
          Our team of expert chefs will work with you to create a bespoke menu that reflects your taste and style. We use only the freshest, locally sourced ingredients to create delicious and innovative dishes that will delight your guests. Whether you're planning an intimate gathering or a grand celebration, we have the expertise to make your wedding day a culinary success. We offer buffet-style, plated dinners, and food stations to fit your vision.
        </p>
      </div>

      <div ref={ref2} className={`animated ${inView2 ? 'visible slide-in-up' : ''}`} style={{marginTop: '40px'}}>
        <h3>Corporate Catering</h3>
        <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Corporate Food" />
        <p>
          We understand the importance of making a good impression in the corporate world. That's why we offer a range of corporate catering services to suit your needs, from breakfast meetings to product launches. Our team will work with you to create a menu that is both delicious and professional, and our experienced staff will ensure that your event is a success. We can accommodate dietary restrictions and preferences to ensure all your guests are satisfied.
        </p>
      </div>

      <div ref={ref3} className={`animated ${inView3 ? 'visible slide-in-up' : ''}`} style={{marginTop: '40px'}}>
        <h3>Private Parties</h3>
        <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Party Food" />
        <p>
          Our party catering services are designed to take the stress out of hosting. We offer a wide range of menu options to suit any occasion, from casual get-togethers to formal celebrations. Our team will work with you to create a menu that your guests will love, and our professional staff will ensure that your event runs smoothly. We can also provide bar services and staffing for your event.
        </p>
      </div>

      <div ref={ref4} className={`animated ${inView4 ? 'visible slide-in-up' : ''}`} style={{marginTop: '40px'}}>
        <h3>Special Events</h3>
        <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Special Events Food" />
        <p>
          No matter the occasion, we have the perfect catering solution for you. We have experience catering for a wide range of special events, from intimate family gatherings to large-scale festivals. Our team will work with you to create a menu that is tailored to your event, and our professional staff will ensure that your guests have an unforgettable experience.
        </p>
      </div>

      <div ref={ref5} className={`animated ${inView5 ? 'visible slide-in-up' : ''}`} style={{marginTop: '40px'}}>
        <h3>Event Planning</h3>
        <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Event Planning" />
        <p>
          In addition to our catering services, we also offer full-service event planning. Our experienced event planners will work with you to bring your vision to life. We can assist with venue selection, decor, entertainment, and more. Let us handle the details so you can relax and enjoy your event.
        </p>
      </div>
    </div>
  );
};

export default Services;
