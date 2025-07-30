import React from 'react';
import { useInView } from 'react-intersection-observer';
import './SecondaryPage.css';

const Weddings = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="secondary-page">
      <h2>Wedding Catering</h2>
      <p>We make your special day unforgettable with our exquisite wedding catering services.</p>
      <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wedding Food" />
      <div ref={ref} className={`animated ${inView ? 'visible slide-in-up' : ''}`}>
        <p>
          Our team of expert chefs will work with you to create a bespoke menu that reflects your taste and style. We use only the freshest, locally sourced ingredients to create delicious and innovative dishes that will delight your guests. Whether you're planning an intimate gathering or a grand celebration, we have the expertise to make your wedding day a culinary success.
        </p>
        <h3>Sample Menu</h3>
        <ul>
          <li><strong>Appetizers:</strong> Prosciutto-wrapped melon, caprese skewers, shrimp cocktail</li>
          <li><strong>Main Course:</strong> Pan-seared salmon with lemon-dill sauce, filet mignon with red wine reduction, or a vegetarian option of roasted vegetable lasagna</li>
          <li><strong>Sides:</strong> Garlic mashed potatoes, roasted asparagus, seasonal salad</li>
          <li><strong>Dessert:</strong> Wedding cake, assorted pastries, chocolate fountain</li>
        </ul>
        <p>
          We offer a variety of catering styles to suit your wedding, including plated dinners, buffets, food stations, and canapés. Our experienced event planners can also assist with other aspects of your wedding, such as venue selection, décor, and entertainment. Contact us today to start planning your dream wedding.
        </p>
      </div>
    </div>
  );
};

export default Weddings;
