import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../../../styles/home-banner-style.css";

gsap.registerPlugin(ScrollTrigger);

const HomeBanner = ({ videoUrl, bannerText, bannerType, imageUrl }) => {
  
  const [scrollDirection, setScrollDirection] = useState(1);
  const [currentScroll, setCurrentScroll] = useState(0);
  const loopRef = useRef(null);
  const [textArray, setTextArray] = useState([]);

   

  useEffect(() => {
    // Initialize animations when the component mounts
    //initializeGalleryAnimations();
    initializeGSAPAnimations();
    
    // Update the textArray based on bannerText from props
    const array = bannerText.split(',');
    setTextArray(array);

    // Cleanup function to remove ScrollTrigger and event listeners
    return () => {
      // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      const myTrigger = ScrollTrigger.getById('abcde');
            if (myTrigger) {
                myTrigger.kill();
            }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [bannerText]);

  useEffect(() => {
    // Reinitialize the horizontal marquee when textArray is updated
    if (textArray.length > 0) {
      initializeHorizontalMarquee();
    }
  }, [textArray]);

  useEffect(() => {
    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize); // Handle resizing

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentScroll, scrollDirection]);

  const handleScroll = () => {
    const newScroll = window.pageYOffset;
    const direction = newScroll > currentScroll ? 1 : -1;
    // if (direction !== scrollDirection) {
    //   if (loopRef.current) {
    //     gsap.to(loopRef.current, { timeScale: direction, overwrite: true });
    //   }
    //   setScrollDirection(direction);
    // }
    setCurrentScroll(newScroll);
  };

  const handleResize = () => {
    // Refresh ScrollTrigger to recalculate the layout and prevent overlap
    ScrollTrigger.refresh();
  };

  // const initializeHorizontalMarquee = () => {
  //   const links = document.querySelectorAll(".js-text");
  //   const paddingRight = parseFloat(gsap.getProperty(links[0], "marginRight", "10px"));

  //   const loop = horizontalLoop(links, {
  //     repeat: -1,
  //     speed: 1.5,
  //     draggable: false,
  //     reversed: false,
  //     paddingRight: paddingRight,
  //   });

  //   loopRef.current = loop;
  // };

  // const initializeHorizontalMarquee = () => {
  //   const links = document.querySelectorAll(".js-text");
  
  //   // Set a larger margin-right to increase spacing
  //   const updatedMarginRight = 20; // Adjust this value as needed
  //   links.forEach(link => {
  //     gsap.set(link, { marginRight: `${updatedMarginRight}px` });
  //   });
  
  //   // Retrieve the updated paddingRight value
  //   const paddingRight = parseFloat(gsap.getProperty(links[0], "marginRight", "px"));
  
  //   // Initialize the horizontal loop with the updated paddingRight
  //   const loop = horizontalLoop(links, {
  //     repeat: -1,
  //     speed: 1.5,
  //     draggable: false,
  //     reversed: false,
  //     paddingRight: paddingRight,
  //   });
  
  //   loopRef.current = loop;
  // };
  

  const initializeHorizontalMarquee = () => {
    const links = Array.from(document.querySelectorAll(".js-text"));
  
    // Set a larger margin-right to increase spacing
    const updatedMarginRight = 5; // Adjust this value as needed
    links.forEach(link => {
      gsap.set(link, { marginRight: `${updatedMarginRight}px  !important` });
    });
  
    // Add some margin on the left for the first element
    const updatedMarginLeft = 5; // Adjust this value as needed
    gsap.set(links[0], { marginLeft: `${updatedMarginLeft}px !important` });
  
    // Retrieve the updated paddingRight value
    const paddingRight = parseFloat(gsap.getProperty(links[0], "marginRight", "px !important"));
  
    // Initialize the horizontal loop with the updated paddingRight
    const loop = horizontalLoop(links, {
      repeat: -1,
      speed: 1.5,
      draggable: false,
      reversed: false,
      paddingRight: paddingRight,
    });
  
    loopRef.current = loop;
  };
  
  
  
  

  const horizontalLoop = (items, config) => {
    items = gsap.utils.toArray(items);
    config = config || {};
    const tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    });

    const length = items.length;
    const startX = items[0].offsetLeft;
    const widths = [];
    const xPercents = [];
    const pixelsPerSecond = (config.speed || 1) * 100;
    const snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1);

    items.forEach((el, i) => {
      widths[i] = parseFloat(gsap.getProperty(el, "width", "px")) + parseFloat(gsap.getProperty(el, "marginRight", "px"));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / widths[i]) * 100 +
        gsap.getProperty(el, "xPercent")
      );
    });

    const totalWidth = items[length - 1].offsetLeft + widths[length - 1] - startX + (parseFloat(config.paddingRight) || 0);

    items.forEach((item, i) => {
      const curX = (xPercents[i] / 100) * widths[i];
      const distanceToStart = item.offsetLeft + curX - startX;
      const distanceToLoop = distanceToStart + widths[i];

      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      ).fromTo(
        item,
        { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
        {
          xPercent: xPercents[i],
          duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      );
    });

    return tl;
  };

  const initializeGSAPAnimations = () => {
    // Smooth scroll animation for the main hero section
    gsap.to(".main-hero", {
      y: "-100%",
      ease: "power1.inOut",
      scrollTrigger: {
        id: "abcde",
        trigger: ".home-image-banner",
        start: "top top",
        end: "+=100%",
        scrub: 1,
      },
    });

    // Timeline for scrolling effect
    gsap.timeline({
      scrollTrigger: {
        id: "abcde",
        trigger: ".home-image-banner",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  };

  return (
    <section className="main_hero">
      <div className="home-image-banner">
        {bannerType === "video" ? (
          <div className="video_area">
            <video playsInline autoPlay muted loop id="myVideo" preload="auto">
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        ) : (
          <div className="hero_image_area">
            <img src={imageUrl} alt="home banner 1" />
          </div>
        )}


        

        
        <div className="overlay" id="overlay">
  <div className="main-hero">
    <div className="text-marquee">
      <div className="text-single">
        <h1>
          {textArray.map((item, index) => (
            <span
              key={index}
              className={`text_marquee_hero js-text ${
                index === textArray.length - 1 ? "last-element" : ""
              }`}
             
            >
              {item}
              {index !== textArray.length - 1 ? "/" : "/"}
            </span>
          ))}
        </h1>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default HomeBanner;
