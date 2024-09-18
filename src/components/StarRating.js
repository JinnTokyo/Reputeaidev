import React, { useState, useEffect, useRef } from 'react';
import '../styles/StarRating.css';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.5l3.09 6.83 7.41.58-5.66 5.1 1.68 7.49L12 17.25l-6.52 4.25 1.68-7.49L1.5 8.91l7.41-.58L12 1.5z" />
  </svg>
);

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const ratingRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ratingRef.current && !ratingRef.current.contains(event.target)) {
        setRating(0);
        setHover(0);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="star-rating" ref={ratingRef}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`star-button ${index <= (hover || rating) ? "on" : "off"} ${index <= rating ? "clicked" : ""}`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <StarIcon />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;