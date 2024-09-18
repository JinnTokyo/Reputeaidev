import React, { useState } from 'react';
import { FaBolt, FaPaintBrush, FaBrain, FaGlobe } from 'react-icons/fa';
import '../styles/Features.css';

const FeatureItem = ({ icon, title, description, isBlurred, onMouseEnter, onMouseLeave }) => (
  <div 
    className={`feature-item ${isBlurred ? 'blurred' : ''}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const Features = ({ featuresRef }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: <FaBolt />,
      title: "Instant Testimonial Generation",
      description: "Generate personalized testimonials in seconds using our AI. Save time and build trust with ease."
    },
    {
      icon: <FaPaintBrush />,
      title: "Customizable Templates",
      description: "Choose from a variety of professionally designed testimonial templates that can be customized to match your brand's voice and style."
    },
    {
      icon: <FaBrain />,
      title: "AI-Powered Insights",
      description: "Leverage advanced AI to gain insights into what makes a testimonial effective, helping you create more impactful testimonials."
    },
    {
      icon: <FaGlobe />,
      title: "Multilingual Support",
      description: "Expand your reach with testimonials in multiple languages. Our AI supports testimonial generation in various languages, helping you connect with a global audience."
    }
  ];

  return (
    <div className='features-container'>
      <section className="features-section" ref={featuresRef}>
        <h2 className="features-title">Key Features</h2>
        <p className='features-introduction-text'>This platform enables users to quickly generate personalized testimonials with AI,
           customize them with professionally designed templates, gain insights into what makes them effective, and create testimonials in multiple languages to reach a global audience.</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index} 
              {...feature} 
              isBlurred={hoveredIndex !== null && hoveredIndex !== index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;