import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "../animations/Typewriter";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/WorkHome.css";
import "../../../styles/overview.css";
import "../../../styles/breadcrumb.css";
import maskWhite from "../../../assets/images/mask-white.svg";

const WorkSection = ({ title, paginationText, projects, description }) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleImageClick = (work, thumbnail, post_video, item_contents) => {
    if (loading) return; // Prevent duplicate clicks
    setSelectedImage(work); // Set the selected image for fullscreen zoom
    setLoading(true); // Start the loading state

    // console.log(work);
    // console.log(item_contents);

    const animationDuration = 1200; // Match with transition duration
    setTimeout(() => {
    
      const url = work.item_url.replace(/\s+/g, "-"); 

      const queryString = `?id=${work.item_id}&title=${encodeURIComponent(url)}`;
      navigate(`/content${queryString}`, {
        state: { selectedImageId: work.item_id, selectedImage: thumbnail, postVideo: post_video , itemContents: item_contents.join(',')},
      });
    }, animationDuration); // Wait for the animation to complete
  };

  return (
    <section className="home-page-work-wrapper" id="work-section">
      <div className="container-fluid">
        <div className="col-12 smll_bx_wht">
          <img src={maskWhite} alt="mask  1" />
        </div>
        <div className="pagination-text row justify-content-between align-items-center py-5">
          <div className="col-6">
            <h6>{paginationText}</h6>
          </div>
          <div className="col-6">
            <h5>{title}</h5>
          </div>
        </div>
        <h2 className="home-para-content">
          <Typewriter textArray={[description]} period={2000} speed={100} />
        </h2>
        <div className="small-container-fluid">
          {projects.slice(0, 3).map((project, index) => (
            <div className="main-banner-wrapper" data-aos="fade-up" key={index}>
              <div className="abs_full">
                <div className="pos_full">
                  <motion.div
                    key={project.item_id}
                    layoutId={`image-${project.item_id}`} // Shared layout id for image animation
                    onClick={() =>
                      handleImageClick(project, project.item_thumbnail, project.post_video, project.item_services)
                    }
                    style={{ cursor: loading ? "not-allowed" : "pointer" }} // Disable click during loading
                  >
                    <img
                      className="main-img"
                      data-aos="fade-up"
                      src={project.item_thumbnail}
                      alt={project.item_url}
                    />
                    <div className="banner-text-wrapper">
                      <h2 data-aos="fade-up">
                        <i
                          dangerouslySetInnerHTML={{
                            __html: project.item_title,
                          }}
                        />
                      </h2>
                    </div>
                    <div className="breadcrumb_banner">
                      <div className="bg-gray-breadcrumb">
                        <img src={project.item_logo} alt={project.item_title} />
                        <ul className="list-group list-group-horizontal">
                          {project.item_services.length > 0 &&
                            project.item_services.map((item, i) => (
                              <li className="list-group-item" key={i}>
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pb-200">
          <div className="white_btn_black border-animation">
            <Link to="/works">View all work</Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="fullscreen-image"
            layoutId={`image-${selectedImage.item_id}`}
            className="fullscreen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }} // Slower animation
            onAnimationComplete={() => setLoading(false)} // Reset loading state
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 1000,
              background: `url(${selectedImage.item_thumbnail}) center center / cover no-repeat`,
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkSection;
