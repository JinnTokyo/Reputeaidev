import React from 'react';
import './Testimonials.js';

const TestimonialCard = ({ name, title, photo, text, rating }) => (
  <div className="testimonial-card">
    <div className="testimonial-header">
      <img src={photo} alt={name} className="testimonial-photo" />
      <div className="testimonial-info">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
    <p className="testimonial-text">{text}</p>
    <div className="testimonial-rating">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      title: "CEO of XYZ Corp",
      photo: "/path/to/jane-photo.jpg",
      text: "Using Repute's AI testimonials, we've seen a 20% increase in customer engagement. The process was quick, and the results were authentic and impactful.",
      rating: 5
    },
    // Add more testimonials here
  ];

  return (
    <section className="testimonials-section">
      <h2>What Our Users Say</h2>
      <p className="subheading">See how our AI-generated testimonials have helped businesses like yours build trust and drive conversions.</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
      <button className="cta-button">Try it for Free</button>
    </section>
  );
};

export default Testimonials;