import React from 'react';

const SplashBox = ({ imgSrc, altText }) => (
  <div className="splash-box">
    <img src={imgSrc} alt={altText} />
  </div>
);

export default SplashBox;
