import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './Home.css';

const Home = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });

  const { ref: refIntro, inView: inViewIntro } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="home container">
      <section ref={refIntro} className={`intro animated ${inViewIntro ? 'visible slide-in-left' : ''}`}>
        <h2>Your Vision, Our Passion</h2>
        <p>
          We are a team of passionate event planners and caterers dedicated to bringing your vision to life. With years of experience in the industry, we have the expertise to handle events of all sizes, from intimate gatherings to large corporate functions. Our commitment to quality and attention to detail ensures that every event is a success.
        </p>
        <p>
          At Awesome Events, we believe that great events start with great food. Our culinary team creates delicious and innovative menus using only the freshest ingredients. We work with you to create a custom menu that reflects your taste and style.
        </p>
        <p>
          Let us take the stress out of planning your next event. We offer a full range of services, including event design, venue selection, and on-site coordination. Contact us today to learn more about how we can make your next event unforgettable.
        </p>
        <Link to="#" className="review-link">"The team at Awesome Events was a pleasure to work with. They were professional, creative, and attentive to every detail." - Jane Doe</Link>
        <Link to="/about" className="more-about-us">Learn More</Link>
      </section>

      <section ref={ref1} className={`about-us animated ${inView1 ? 'visible slide-in-up' : ''}`}>
        <h2>About On-Wheel Catering</h2>
        <p>Founded in 2023, On-Wheel Catering was born from a passion for creating unforgettable culinary experiences. We believe that every event, big or small, deserves exceptional food and impeccable service. Our journey began with a single food truck and a dream to bring restaurant-quality dining to any location.</p>
        <p>Our philosophy is simple: use the freshest, locally-sourced ingredients to craft delicious, innovative dishes that delight the senses. We are more than just caterers; we are creators of memories, and we are honored to be a part of your special moments.</p>
      </section>

      <section ref={ref2} className={`our-services animated ${inView2 ? 'visible slide-in-up' : ''}`}>
        <h2>Our Services</h2>
        <p>We offer a wide range of catering services to suit any occasion. From corporate lunches to elegant weddings, our team is equipped to handle it all. Our services include:</p>
        <ul>
          <li>Corporate Event Catering</li>
          <li>Wedding Receptions</li>
          <li>Private Parties</li>
          <li>Holiday Gatherings</li>
          <li>Custom Menu Planning</li>
        </ul>
        <p>We also provide full-service event planning, including venue selection, decor, and entertainment. Let us handle the details so you can enjoy your event.</p>
      </section>

      <section ref={ref3} className={`testimonials animated ${inView3 ? 'visible fade-in' : ''}`}>
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"On-Wheel Catering made our wedding day absolutely perfect. The food was incredible, and the service was top-notch. We couldn't have asked for a better experience."</p>
          <span>- Sarah & Tom</span>
        </div>
        <div className="testimonial">
          <p>"We hired On-Wheel for our annual corporate event, and they exceeded all our expectations. The food was a huge hit with our employees, and the planning process was seamless."</p>
          <span>- John D., TechCorp</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
