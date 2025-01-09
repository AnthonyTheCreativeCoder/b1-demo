import React, { useState, useEffect, useTransition } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/PageContent.css";
import useServiceDetails from "../../hooks/react-query/useServiceDetails";
import useService from "../../hooks/react-query/useService";
import "../../styles/overview.css";
import WhiteSmallTiles from "../../assets/images/white-small-tiles.png";
import Typewriter from "../common/animations/Typewriter";
import "../../styles/video-style.css";
import MoreService from "../common/ui-sections/MoreService";


export default function PageContent() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let title = queryParams.get("title");
  title = title ? title.replace(/\s+/g, "-") : ""; // Replace spaces with hyphens
  const { data, error, isLoading } = useServiceDetails(title);
 


  const [isAnimationReady, setIsAnimationReady] = useState(false); // State for controlling animation
  const [isPending, startTransition] = useTransition(); // For wrapping the animation trigger in startTransition
  const navigate = useNavigate();
  const { selectedImageId } = location.state || {};
  // const selectedImage = images.find((img) => img.id === selectedImageId); // making image dynamic
  const { selectedImage } = location.state || {};
  const { isSamePageNavigation } = location.state || {};

  // Use the value of isSamePageNavigation
if (isSamePageNavigation) {
  console.log("Navigating from the same page, no animation required.");
} else {
  console.log("Navigating from a different page, apply animation.");
}

  console.log("Is Same Page Navigation "+isSamePageNavigation);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Once data is loaded, trigger animation
    if (!isLoading && data) {
      startTransition(() => {
        setIsAnimationReady(true); // Trigger animation after data is loaded
      });
    }

  }, [isLoading, data, startTransition]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available for the title: {title}</div>;

  return (
    <div className="serviceDetailsBanner" style={{ backgroundColor: 'white' }}>
      {/* Fullscreen Image Section */}

    {isSamePageNavigation === 8888 ? (
      <motion.div
        layoutId={`image-${selectedImageId}`}
        style={{
          backgroundImage: `url(${selectedImage})`,
        }}
        className="imageServiceDetails"
        initial={{ scale: 1 }}
        animate={{ scale: isAnimationReady ? 1 : 1 }} // Animate only after data is ready
        exit={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Overlay */}
        <div className="overlayDetails"></div>

        {/* Title Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isAnimationReady ? 1 : 0 }} // Fade in once data is ready
          transition={{ delay: 0.5, duration: 0.5 }}
          className="motionBannerArea"
        >
          <h1 className="cssanimation sequence fadeInBottom">
            {data?.post_title || ""}
          </h1>
        </motion.div>
      </motion.div>
 ) : (
      <section className="Statisdiv">
         
    <div
      style={{
        backgroundImage: `url(${selectedImage})`,
      }}
      className="imageServiceDetails"
    >
      {/* Overlay */}
      <div className="overlayDetails"></div>

      {/* Title Centered */}
      <div className="motionBannerArea">
        <h1 className="cssanimation sequence fadeInBottom">
          {data?.post_title || ""}
        </h1>
      </div>
    </div>
      </section>
       )}

      <section className="overview_area" id="overview-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="overview_intro_head" data-aos-delay="100" data-aos="fade-up">
                <img src={WhiteSmallTiles} alt="whiteBoxTiles" />
                <Typewriter
                  textArray={["Overview"]}
                  period={2000}
                  speed={300}
                  customclassName="typewrite"
                />
              </div>
            </div>
            <div className="col-sm-8">
              <div className="overview_intro_para cssanimation sequence" data-aos-delay="300" data-aos="fade-up">
                <Typewriter
                  textArray={[data?.post_content || "Hello There"]}
                  period={2000}
                  speed={100}
                  customclassName="typewrite"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoreService  moreWorkId={data?.post_id}/>

    </div>
  );
}
