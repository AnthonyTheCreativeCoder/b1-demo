import React, { useEffect } from 'react';
import SplashBox from './SplashBox';
import rectangleLines from '../../../../assets/images/rectangle-lines.png';
import rectangleSmallPixels from '../../../../assets/images/rectangle-small-pixels.png';
import rectangleGray from '../../../../assets/images/rectangle-gray.png';
import rectangleBlack from '../../../../assets/images/rectangle-black.png';
import '../../../../styles/rain-splash-work-details.css'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const SplashDetailsContainer = () => {
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
              id: "rainDetailsContainer",
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
      { container: '.rain_work_details_left', box: '.splash-box' },
      { container: '.rain_work_details_right', box: '.splash-box' },
      { container: '.rain_work_details_last', box: '.splash-box' },
    ];

    // Apply animations
    animationAreas.forEach(area => {
      animateBoxes(area.container, area.box);
    });

    // Cleanup function
    return () => {
      // scrollTriggers.forEach(trigger => {
      //   trigger.kill();  
      // });
      const myTrigger = ScrollTrigger.getById('rainDetailsContainer');
            if (myTrigger) {
                myTrigger.kill();
            }
      scrollTriggers = [];  // Clear the array
    };
  }, []); 

  const leftImages = [
    rectangleLines,
    rectangleSmallPixels,
    rectangleLines,
    rectangleSmallPixels,
    rectangleSmallPixels,
    rectangleSmallPixels,
    rectangleLines,
    rectangleSmallPixels,    
  ];

  const rightImages = [
    rectangleLines,
    rectangleSmallPixels,
    rectangleLines,
    rectangleSmallPixels,
    rectangleSmallPixels,
    rectangleLines,
    rectangleBlack,
    rectangleLines,
    rectangleBlack,
    rectangleGray,   
    rectangleSmallPixels,
    rectangleSmallPixels,
    rectangleGray,    
  ];

  const LastImages = [
    rectangleLines,
    rectangleBlack,
    rectangleBlack,
    rectangleSmallPixels,
    rectangleSmallPixels,
    rectangleBlack,
    rectangleBlack,
    rectangleGray,
    rectangleBlack
  ];

  return (
    <div className="work-details-splash">
      <div className="row">
        <div className="rain_work_details_left">
          {leftImages.map((img, index) => (
            <SplashBox key={index} imgSrc={img} altText="rectangle box" />
          ))}
        </div>
        <div className="rain_work_details_right">
          {rightImages.map((img, index) => (
            <SplashBox key={index} imgSrc={img} altText="rectangle box" />
          ))}
        </div>
        <div className="rain_work_details_last">
          {LastImages.map((img, index) => (
            <SplashBox key={index} imgSrc={img} altText="rectangle box" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashDetailsContainer;



