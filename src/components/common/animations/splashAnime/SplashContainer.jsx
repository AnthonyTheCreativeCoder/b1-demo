import React, { useEffect } from 'react';
import SplashBox from './SplashBox';
import rectangleLines from '../../../../assets/images/rectangle-lines.png';
import rectangleSmallPixels from '../../../../assets/images/rectangle-small-pixels.png';
import rectangleGray from '../../../../assets/images/rectangle-gray.png';
import rectangleBlack from '../../../../assets/images/rectangle-black.png';
import '../../../../styles/rain-animation.css';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

// gsap.registerPlugin(ScrollTrigger);



const SplashContainer = () => {

  useEffect(() => {
    
    let scrollTriggers = [];

    gsap.registerPlugin(ScrollTrigger);

    const animateBoxes = (containerRainSelector, boxSelector) => {
      const containers = document.querySelectorAll(containerRainSelector);

      containers.forEach(containerRain => {
        const boxes = containerRain.querySelectorAll(boxSelector);

        if (boxes.length > 0) {
          const trigger = gsap.fromTo(boxes, {
            opacity: 0,
            y: -100
          }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              id: "rainAnimationContainer",
              trigger: containerRain,
              start: "top 90%",
              end: "bottom top",
              toggleActions: "play none none reverse"
            }
          });

          // Save the ScrollTrigger instance for cleanup
          scrollTriggers.push(trigger.scrollTrigger);
        }
      });
    };

    // Define animation areas
    const animationAreas = [
      { container: '.rain_animate_area_left', box: '.splash-box' },
      { container: '.rain_animate_area_right', box: '.splash-box' },
      { container: '.rain_work_details_left', box: '.splash-box' },
      { container: '.rain_work_details_right', box: '.splash-box' },
      { container: '.rain_work_details_last', box: '.splash-box' },
      { container: '.others_work_area', box: '.ft_msk' },
      { container: '.featured_work_area', box: '.ft_msk' },
      { container: '.others_work_area', box: '.ft_msk_left' },
      { container: '.service_area_home', box: '.ft_msk_left' }
    ];

    // Apply animations
    animationAreas.forEach(area => {
      animateBoxes(area.container, area.box);
    });

    // Cleanup function
    return () => {
      const myTrigger = ScrollTrigger.getById('rainAnimationContainer');
      if (myTrigger) {
          myTrigger.kill();
      }
      scrollTriggers = [];  // Clear the array
    };
  }, []); // Empty dependency array to ensure this runs once on mount

  const leftImages = [
    rectangleLines,
    rectangleBlack,
    rectangleSmallPixels,
    rectangleGray,
    rectangleLines,
    rectangleSmallPixels,
    rectangleBlack,
    rectangleSmallPixels,
    rectangleSmallPixels,
    rectangleLines,
    rectangleBlack,
    rectangleGray,
    rectangleSmallPixels,
    rectangleLines,
    rectangleBlack,
  ];

  const rightImages = [
    rectangleSmallPixels,
    rectangleGray,
    rectangleLines,
    rectangleBlack,
    rectangleSmallPixels,
    rectangleBlack,
    rectangleSmallPixels,
    rectangleLines,
    rectangleLines,
    rectangleSmallPixels,
    rectangleSmallPixels,
    rectangleLines,
    rectangleLines,
    rectangleSmallPixels,
    rectangleSmallPixels,
  ];

  return (
    <div className="container-splash">
      <div className="row">
        <div className="rain_animate_area_left">
          {leftImages.map((img, index) => (
            <SplashBox key={index} imgSrc={img} altText="rectangle box" />
          ))}
        </div>
        <div className="rain_animate_area_right">
          {rightImages.map((img, index) => (
            <SplashBox key={index} imgSrc={img} altText="rectangle box" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashContainer;
