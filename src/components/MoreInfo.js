import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './MoreInfo.css';

const MoreInfo = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="more-info container">
      <div ref={ref1} className={`info-section animated ${inView1 ? 'visible slide-in-left' : ''}`}>
        <div className="info-text">
          <h2>Expert IT Solutions</h2>
          <p>
            SADI IT CONSULTANCY LTD delivers innovative IT solutions for businesses, including cloud migration, cybersecurity, and custom software development.
          </p>
          <Link to="/case-studies" className="learn-more">Learn More</Link>
        </div>
        <div className="info-image">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=compress&w=800&q=80" alt="IT Solutions" />
        </div>
      </div>
      <div ref={ref2} className={`info-section reverse animated ${inView2 ? 'visible slide-in-left' : ''}`}>
        <div className="info-text">
          <h2>Digital Transformation</h2>
          <p>
            We help organizations modernize their infrastructure and processes, enabling growth and efficiency through technology.
          </p>
          <Link to="/services" className="learn-more">Learn More</Link>
        </div>
        <div className="info-image">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=compress&w=800&q=80" alt="Digital Transformation" />
        </div>
      </div>
      <div ref={ref3} className={`info-section animated ${inView3 ? 'visible slide-in-left' : ''}`}>
        <div className="info-text">
          <h2>IT Support & Security</h2>
          <p>
            Our team provides ongoing IT support and cybersecurity services to keep your business running smoothly and securely.
          </p>
          <Link to="/services" className="learn-more">Learn More</Link>
        </div>
        <div className="info-image">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=800&q=80" alt="IT Support" />
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
