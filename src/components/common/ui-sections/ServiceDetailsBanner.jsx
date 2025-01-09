import React, { useState, useEffect } from "react";
import "../../../styles/service-banner-inner.css";
import ArrowBounceInner from "./ArrowBounceInner"; // Ensure this component exists
import { motion } from "framer-motion";

const ServiceDetailsBanner = ({ banner, title }) => {
  // console.log("Service details Banner => " + banner); // Debugging: check the banner URL
  const [showOverlay, setShowOverlay] = useState(true);
  
  // Hide the overlay after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {/* Overlay Section: This overlay fades out after 3 seconds */}
      {showOverlay && (
        <motion.div
          layoutId={`image-58`}
          initial={{ opacity: 1 }} // Start fully visible
          animate={{ opacity: 0 }} // Animate to invisible
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }} // Apply easing and delay
          className="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: 1000,
            backgroundImage: `url(${banner})`, // Use the passed banner image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Main Banner Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly down
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
        transition={{ duration: 1, ease: "easeOut" }} // Apply easing and duration
        className="image-grid"
      >
        {/* Image container using <picture> tag for responsive images */}
        <picture className="image-container">
          <img
            className="w-100 d-block hero-image" // Ensures full width and block display
            src={banner} // Use the banner URL
            alt="Service Banner"
          />
        </picture>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="cssanimation sequence fadeInBottom">{title}</h1>
        </div>

        {/* Arrow Bounce Component */}
        <ArrowBounceInner id="overview-section" />
      </motion.section>
    </>
  );
};

export default ServiceDetailsBanner;
