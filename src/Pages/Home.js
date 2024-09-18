import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import '../App.css';
import NeonButton from '../components/NeonButton';
import StarRating from '../components/StarRating';
import Contact from './Contact';
import Features from './Features';
import Testimonials from '../components/Testimonials';
import Pricing from './Pricing';
import InteractiveTestimonial from '../components/InteractiveTestimonial';
import SignUp from './SignUp';
import Navigation from '../components/Navigation';
import { initDarkMode, setupScrollToTop, setupLazyLoading, setupScrollAnimation, setupEmailValidation } from '../utils/utils';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import confetti from 'canvas-confetti';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [neonColor, setNeonColor] = useState(getRandomNeonColor());
  const canvasRef = useRef(null);
  const featuresRef = useRef(null);
  const [logoAnimated, setLogoAnimated] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const { width, height } = useWindowSize();

  function getRandomNeonColor() {
    const neonColors = [
      '#ff00ff', // Magenta
      '#ff9900', // Orange
      '#ff0066', // Pink
      '#3300ff'  // Blue
    ];
    return neonColors[Math.floor(Math.random() * neonColors.length)];
  }

  function darkenColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.max(0, Math.min(255, parseInt(color, 16) - amount)).toString(16)).substr(-2));
  }

  useEffect(() => {
    const darkerNeonColor = darkenColor(neonColor, 20);
    document.documentElement.style.setProperty('--neon-color', darkerNeonColor);
  }, [neonColor]);

  const scrollToFeatures = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToFeatures: true } });
    } else {
      featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.state?.scrollToFeatures) {
      featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);


  useEffect(() => {
    initDarkMode();
    setupScrollToTop();
    setupLazyLoading();
    setupScrollAnimation();
    setupEmailValidation();
  }, []);

  return (
      <div className="App">
        {showConfetti && (
          <ReactConfetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={200}
            initialVelocityY={{ min: -15, max: -5 }}
            initialVelocityX={{ min: -10, max: 10 }}
            gravity={0.1}
            colors={['#ff00ff', '#ff9900', '#ff0066', '#3300ff', '#00ff00', '#ffff00']}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 9999,
              pointerEvents: 'none',
            }}
          />
        )}

        <button id="scrollToTopBtn">↑</button>

          <main>
            <div className="homePage">
              <div className="hero">
                <div className="main-content">
                  <h1 className="main-heading">
                    <div className="heading-line">Boost Trust with</div>
                    <div className="heading-line text-pink">AI-Crafted Testimonials</div>
                  </h1>
                  <p className="subtitle">Generate authentic, Al-crafted testimonials in seconds to boost trust, drive conversions, and elevate your brand's <strong>reputation.</strong></p>
                  <InteractiveTestimonial />
                </div>
              </div>
            </div>
          </main>

          <Features featuresRef={featuresRef} />
          <Testimonials />

          <footer style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px',
            color: '#ffffff',
          }}>
            <p className="footer" style={{
              fontSize: 'calc(8px + 18px)',
              margin: 0
            }}>&copy; 2024 Repute. All rights reserved.</p>
          </footer>
        </div>
  );
}

export default Home;