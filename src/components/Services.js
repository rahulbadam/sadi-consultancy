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
      <h2>Our IT Consultancy Services</h2>
      <p>We provide a comprehensive range of IT services designed to help your business succeed in the digital era. Our expertise covers every aspect of technology, from strategy to implementation and ongoing support.</p>

      <div ref={ref1} className={`animated ${inView1 ? 'visible slide-in-up' : ''}`} style={{marginTop: '40px'}}>
        <h3>IT Strategy & Consulting</h3>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=compress&w=800&q=80" alt="IT Strategy" />
        <p>
          We help you develop and execute a technology roadmap aligned with your business goals. Our consultants provide expert advice on digital transformation, infrastructure, and process optimization.
        </p>
      </div>

      <div ref={ref2} className={`animated ${inView2 ? 'visible slide-in-up' : ''}`} style={{marginTop: '40px'}}>
        <h3>Cloud Solutions & Migration</h3>
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=compress&w=800&q=80" alt="Cloud Solutions" />
        <p>
          Move your business to the cloud with confidence. We offer cloud migration, management, and optimization services for platforms like AWS, Azure, and Google Cloud.
        </p>
      </div>

      <div ref={ref3} className={`animated ${inView3 ? 'visible slide-in-up' : ''}`} style={{marginTop: '40px'}}>
        <h3>Cybersecurity & Risk Management</h3>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=800&q=80" alt="Cybersecurity" />
        <p>
          Protect your business from cyber threats. Our team provides security assessments, compliance consulting, and ongoing monitoring to keep your data safe.
        </p>
      </div>

      <div ref={ref4} className={`animated ${inView4 ? 'visible slide-in-up' : ''}`} style={{marginTop: '40px'}}>
        <h3>Custom Software Development</h3>
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=compress&w=800&q=80" alt="Software Development" />
        <p>
          We design and build custom software solutions tailored to your business needs, from web applications to enterprise systems.
        </p>
      </div>

      <div ref={ref5} className={`animated ${inView5 ? 'visible slide-in-up' : ''}`} style={{marginTop: '40px'}}>
        <h3>Managed IT Support</h3>
        <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=compress&w=800&q=80" alt="IT Support" />
        <p>
          Our managed IT services ensure your systems run smoothly and securely. We provide helpdesk support, maintenance, and proactive monitoring for your business.
        </p>
      </div>
    </div>
  );
};

export default Services;
