"use client"
// BackToTopButton.js
import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerScroll = 200; // Adjust the scroll position to trigger the button visibility

    setIsVisible(scrollY > triggerScroll);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
        duration: 1500, 
        smooth: 'easeInOutQuart'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
        BACK TO TOP
    </div>
  );
};

export default BackToTopButton;
