import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=compress&w=800&q=80", // Team working
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=compress&w=800&q=80", // Cloud computing
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=800&q=80", // Cybersecurity
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=compress&w=800&q=80", // Software development
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=compress&w=800&q=80", // IT support
    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=compress&w=800&q=80", // Office environment
    "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=compress&w=800&q=80", // Project meeting
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=compress&w=800&q=80"  // Team collaboration
  ];

  return (
    <div className="gallery-container">
      <h2>Our Projects & Team</h2>
      <p>Explore our recent IT projects, team, and work environment.</p>
      <div className="gallery">
        {images.map((src, index) => (
          <GalleryItem key={index} src={src} alt={`IT Project ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
