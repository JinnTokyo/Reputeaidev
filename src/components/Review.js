import React from 'react';

const Review = ({ name, date, rating, text, platform }) => {
  return (
    <div className="review" style={{
      position: 'absolute',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      backgroundColor: 'white',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      maxWidth: '300px'
    }}>
      <div className="review-header">
        <span>{name}</span>
        <span>{date}</span>
        <span>{platform}</span>
      </div>
      <div className="review-rating">
        {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Review;