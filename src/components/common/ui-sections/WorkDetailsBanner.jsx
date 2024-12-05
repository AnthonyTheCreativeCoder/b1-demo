import React, { useState, useEffect } from "react";
import "../../../styles/hero-banner-inner.css";
import ArrowBounceInner from "./ArrowBounceInner";
import { motion } from "framer-motion";

const WorkDetailsBanner = ({ banner, title }) => {
  console.log("Banner => "+banner);
  const [showOverlay, setShowOverlay] = useState(true);
  useEffect(() => {
    // Scroll to top when the component mounts
    // window.scrollTo({ top: 0, behavior: 'instant' });

    // Hide the overlay after 3 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {/* Overlay Section */}
      {showOverlay && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          className="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: 1000,
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Actual Banner Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="image-grid"
      >
        <picture className="image-container">
          <img
            className="w-100 d-block hero-image"
            src={banner}
            alt="WorkBanner"
          />
        </picture>

        <div className="hero-content">
          <h1 className="cssanimation sequence fadeInBottom">{title}</h1>
        </div>
        <ArrowBounceInner id="overview-section" />
      </motion.section>
    </>
  );
};

export default WorkDetailsBanner;
