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
        <h2>Empowering Your Business with Technology</h2>
        <p>
          SADI IT CONSULTANCY LTD is your trusted partner for innovative IT solutions. We help businesses leverage technology to drive growth, efficiency, and security. Our team of experienced consultants delivers tailored strategies and hands-on support for organizations of all sizes.
        </p>
        <p>
          From cloud migration and cybersecurity to custom software development and IT support, we provide end-to-end services that enable you to focus on your core business. Our commitment to excellence and client success sets us apart in the IT consultancy industry.
        </p>
        <p>
          Ready to transform your business with technology? Contact us today to discover how SADI IT CONSULTANCY LTD can help you achieve your goals.
        </p>
        <Link to="#" className="review-link">"SADI IT CONSULTANCY LTD delivered outstanding results for our digital transformation project. Highly recommended!" - Jane Doe, CEO</Link>
        <Link to="/about" className="more-about-us">Learn More</Link>
      </section>

      <section ref={ref1} className={`about-us animated ${inView1 ? 'visible slide-in-up' : ''}`}>
        <h2>About SADI IT CONSULTANCY LTD</h2>
        <p>Founded in 2023, SADI IT CONSULTANCY LTD was established to help businesses harness the power of technology. Our mission is to deliver reliable, scalable, and secure IT solutions that drive business success. With a team of certified professionals, we bring deep expertise in IT strategy, cloud computing, cybersecurity, and software development.</p>
        <p>We believe in building long-term partnerships with our clients, providing ongoing support and guidance as technology evolves. Your success is our priority.</p>
      </section>

      <section ref={ref2} className={`our-services animated ${inView2 ? 'visible slide-in-up' : ''}`}>
        <h2>Our Services</h2>
        <p>We offer a comprehensive suite of IT consultancy services to help your business thrive in the digital age. Our services include:</p>
        <ul>
          <li>IT Strategy & Consulting</li>
          <li>Cloud Solutions & Migration</li>
          <li>Cybersecurity & Risk Management</li>
          <li>Custom Software Development</li>
          <li>Managed IT Support</li>
          <li>Digital Transformation</li>
        </ul>
        <p>Let us handle your technology needs so you can focus on growing your business.</p>
      </section>

      <section ref={ref3} className={`testimonials animated ${inView3 ? 'visible fade-in' : ''}`}>
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"SADI IT CONSULTANCY LTD helped us migrate to the cloud seamlessly. Their expertise and support were invaluable throughout the process."</p>
          <span>- Sarah & Tom, Business Owners</span>
        </div>
        <div className="testimonial">
          <p>"We rely on SADI IT CONSULTANCY LTD for ongoing IT support and cybersecurity. Their team is responsive, knowledgeable, and always delivers results."</p>
          <span>- John D., TechCorp</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
