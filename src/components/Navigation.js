import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';
import confetti from 'canvas-confetti';

function Navigation() {
  const [logoAnimated, setLogoAnimated] = useState(false);
  const getStartedRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    setLogoAnimated(true);
  }, []);

  useEffect(() => {
    if (location.pathname === '/pricing') {
      launchConfetti();
    }
  }, [location.pathname]);

  function launchConfetti() {
    var duration = 4 * 1000; // 4 seconds
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);

      // Since confetti will be scattered across the entire screen, using random origin points
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      }));
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      }));
    }, 250);
  }

  // Mouse movement effect on the "Get Started" button
  const handleMouseMove = (e) => {
    const button = getStartedRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    const button = getStartedRef.current;
    button.style.transform = 'translate(0px, 0px)';
  };

  return (
    <nav>
      <ul>
        <li><Link to="/" className={`logo ${logoAnimated ? 'animate' : ''}`}>Repute</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li>
          <Link
            to="/signup"
            className="get-started"
            ref={getStartedRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
