import React from 'react';
import { useInView } from 'react-intersection-observer';

const GalleryItem = ({ src, alt }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`gallery-item animated ${inView ? 'visible fade-in' : ''}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default GalleryItem;
