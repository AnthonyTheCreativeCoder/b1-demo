// ScrollButton.jsx
import React from 'react';

const ScrollButton = ({ targetId, imageSrc, altText, className }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      <img src={imageSrc} alt={altText} />
    </button>
  );
};

export default ScrollButton;
