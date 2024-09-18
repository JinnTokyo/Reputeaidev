import React, { useEffect, useRef } from 'react';
import '../styles/ShootingStar.css';

const ShootingStar = () => {
  const starContainerRef = useRef(null);

  useEffect(() => {
    function createShootingStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      
      const randomY = Math.random() * window.innerHeight;
      star.style.setProperty('--random-y', `${randomY}px`);
      
      starContainerRef.current.appendChild(star);
      
      star.addEventListener('animationend', () => {
        star.remove();
      });
    }

    function randomInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const intervalId = setInterval(() => {
      createShootingStar();
    }, randomInterval(1000, 10000)); // Between 1 and 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return <div id="star-container" ref={starContainerRef}></div>;
};

export default ShootingStar;