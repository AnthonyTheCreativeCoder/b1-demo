// TransitionOverlay.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './TransitionOverlay.css'; // Create this CSS file

const TransitionOverlay = ({ isActive, onComplete }) => {
  useEffect(() => {
    if (isActive) {
      gsap.to('.transition-overlay', {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: onComplete,
      });
    } else {
      gsap.to('.transition-overlay', {
        scaleX: 0,
        scaleY: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
      });
    }
  }, [isActive, onComplete]);

  return <div className={`transition-overlay ${isActive ? 'active' : ''}`}></div>;
};

export default TransitionOverlay;
