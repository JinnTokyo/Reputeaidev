import React, { useState, useEffect } from 'react';
import '../styles/InteractiveTestimonial.css';
import portrait1 from '../Assets/images/pexels-jonaorle-4029925.jpg';
import portrait2 from '../Assets/images/pexels-olly-774909.jpg';
import portrait3 from '../Assets/images/pexels-linkedin-2182970.jpg';
import portrait4 from '../Assets/images/pexels-jordan-bergendahl-2628960-10402659.jpg';

const portraits = [
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  // Add more portraits here if needed
];

const testimonials = [
  "Incredible technology! The AI testimonials have added so much value to our marketing strategy. Our clients trust us more now.",
  "This tool has revolutionized how we gather feedback. It's efficient and the results are amazingly authentic.",
  "I was skeptical at first, but the AI-generated testimonials are indistinguishable from real ones. A game-changer for our business!"
];

const starRatings = [4, 5];

const InteractiveTestimonial = () => {
  const [testimonial, setTestimonial] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [portrait, setPortrait] = useState(null);
  const [portraitSelected, setPortraitSelected] = useState(false);
  const [showTestimonial, setShowTestimonial] = useState(false);
  const [showStars, setShowStars] = useState(false);

  const generateTestimonial = () => {
    setIsGenerating(true);
    setPortraitSelected(false);
    setDisplayedText('');
    setShowTestimonial(true);
    setShowStars(false);

    // Select random testimonial and portrait
    const newTestimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
    const newPortrait = portraits[Math.floor(Math.random() * portraits.length)];

    setTestimonial(newTestimonial);
    
    // Simulate portrait selection delay
    setTimeout(() => {
      setPortrait(newPortrait);
      setPortraitSelected(true);
    }, 500);

    // Start typewriter effect
    let i = 0;
    const typeWriter = () => {
      if (i < newTestimonial.length) {
        setDisplayedText(prev => prev + newTestimonial.charAt(i));
        i++;
        setTimeout(typeWriter, 50); // Adjust speed as needed
      } else {
        setIsGenerating(false);
        // Show stars after testimonial is fully typed
        setTimeout(() => setShowStars(true), 500); // Delay star appearance
      }
    };
    
    setTimeout(typeWriter, 1000); // Start typing after a short delay
  };

  const generateStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        {index < rating ? '⭐' : '☆'}
      </span>
    ));
  };

  return (
    <div className="interactive-testimonial">
      <button className="generate-testimonial-btn" onClick={generateTestimonial} disabled={isGenerating}>
        Generate Testimonial
      </button>
      {showTestimonial && (
        <div className={`testimonial-wrapper ${showTestimonial ? 'show' : ''}`}>
          <div className={`testimonial-container ${isGenerating ? 'generating' : ''}`}>
            <div className={`testimonial-portrait ${portraitSelected ? 'glow' : ''}`}>
              {portrait && <img src={portrait} alt="Portrait of a person" />}
            </div>
            <div className={`testimonial-content ${!isGenerating && displayedText ? 'glow' : ''}`}>
              <p>{displayedText}</p>
            </div>
          </div>
          {showStars && (
            <div className="testimonial-stars">
              {generateStars(starRatings[Math.floor(Math.random() * starRatings.length)])}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveTestimonial;