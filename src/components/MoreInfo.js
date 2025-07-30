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
          <h2>Exceptional Catering</h2>
          <p>
            At Awesome Events, catering is our passion. We create memorable food for weddings, parties, and corporate events.
          </p>
          <Link to="/case-studies" className="learn-more">Learn More</Link>
        </div>
        <div className="info-image">
          <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Catering" />
        </div>
      </div>
      <div ref={ref2} className={`info-section reverse animated ${inView2 ? 'visible slide-in-left' : ''}`}>
        <div className="info-text">
          <h2>Dream Wedding Feasts</h2>
          <p>
            Your wedding food should be as special as your big day. We create elegant, flavour-packed menus that reflect your style.
          </p>
          <Link to="/weddings" className="learn-more">Learn More</Link>
        </div>
        <div className="info-image">
          <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wedding Feast" />
        </div>
      </div>
      <div ref={ref3} className={`info-section animated ${inView3 ? 'visible slide-in-left' : ''}`}>
        <div className="info-text">
          <h2>Luxury Private Parties</h2>
          <p>
            Every celebration deserves unforgettable food. We specialise in luxury party catering tailored to you and your guests.
          </p>
          <Link to="/parties" className="learn-more">Learn More</Link>
        </div>
        <div className="info-image">
          <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Private Party" />
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
