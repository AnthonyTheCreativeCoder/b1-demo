import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
// import KlineDesign from "../../../assets/images/Kline-Designs.webp";
import "../../../../src/styles/laptop-scroll.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";

const LaptopAnimation = ({ inLaptopImage }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [imageLoaded, setImageLoaded] = useState(false);
  const screenContentRef = useRef(null);
  const laptopScreenRef = useRef(null);
  const pinSpacerRef = useRef(null);

  const animateLaptop = () => {
    // requestAnimationFrame(() => {
    const screenContent = screenContentRef.current;
    const laptopScreen = laptopScreenRef.current;
    const pinSpacer = pinSpacerRef.current;

    if (screenContent && laptopScreen && pinSpacer) {
      const imageHeight = screenContent.offsetHeight;
      const containerHeight = laptopScreen.clientHeight;
      const scrollDistance = imageHeight - containerHeight;

      gsap
        .timeline({
          // delay: 0.6,
          scrollTrigger: {
            id: "laptopAnimationScrollTrigger",
            trigger: pinSpacer,
            start: "top top",
            end: `+=${scrollDistance * 2}`,
            pin: true,
            scrub: 1,
            markers: false, // Debugging markers
          },
        })
        .to(screenContent, {
          y: -scrollDistance,
          duration: 1,
          ease: "none",
        });
      // ScrollTrigger.refresh();
      // Use refreshHard for complete recalculation of AOS positions
      AOS.refreshHard();
    }
    // });
  };
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  useEffect(() => {
    const img = screenContentRef.current;
    // Ensure the image is loaded before starting the animation
    if (img) {
      if (img?.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        return () => img.removeEventListener("load", handleImageLoad);
      }
    }

    // Initialize animation when the image is loaded
    if (imageLoaded) {
      animateLaptop();
      // ScrollTrigger.refresh();
    }

    return () => {
      // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      const myTrigger = ScrollTrigger.getById("laptopAnimationScrollTrigger");
      if (myTrigger) {
        myTrigger.kill();
      }
    };
  }, [imageLoaded]);

  return (
    <>
      <div className="pin-spacer-laptop-scroll" ref={pinSpacerRef}>
        <div className="laptop-container" ref={laptopScreenRef}>
          <div className="laptop">
            <div className="laptop-screen">
              <img
                src={inLaptopImage}
                alt="Animated Content"
                className="screen-content"
                ref={screenContentRef}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaptopAnimation;