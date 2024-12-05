// ImageLink.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import './ImageLink.css'; // Create this CSS file

const ImageLink = ({ src, to }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsTransitioning(true);
    gsap.to('.image', {
      scale: 10,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        navigate(to);
      },
    });
  };

  return (
    <div className="image-container" onClick={handleClick}>
      <motion.img
        className="image"
        src={src}
        alt="Thumbnail"
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
      />
      <div className={`overlay ${isTransitioning ? 'active' : ''}`}></div>
    </div>
  );
};

export default ImageLink;
