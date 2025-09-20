import React from 'react';
import './SecondaryPage.css';

const CaseStudies = () => {
  return (
    <div className="secondary-page">
      <h2>Case Studies</h2>
      <p>
        Explore how we've helped clients achieve digital transformation, improve security, and grow their businesses with technology.
      </p>
      <div style={{marginTop: '40px'}}>
        <h3>Cloud Migration for FinTech</h3>
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=compress&w=800&q=80" alt="Cloud Migration" />
        <p>
          We helped a leading FinTech company migrate their infrastructure to the cloud, improving scalability and reducing costs. Our team managed the entire process, ensuring zero downtime and enhanced security.
        </p>
      </div>
      <div style={{marginTop: '40px'}}>
        <h3>Cybersecurity Upgrade for Retailer</h3>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=800&q=80" alt="Cybersecurity" />
        <p>
          A national retailer partnered with us to upgrade their cybersecurity. We implemented advanced threat detection and compliance solutions, protecting sensitive customer data and ensuring regulatory compliance.
        </p>
      </div>
    </div>
  );
};

export default CaseStudies;
