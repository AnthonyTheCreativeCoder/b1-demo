import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "../animations/Typewriter";
import "../../../styles/GalleryWorkDetails-home.css";
import "../../../styles/AboutHome.css";
import "../../../styles/services-home.css";
import othersLeftMask from "../../../assets/images/others-left-mask.svg";
import maskWhiteNew from "../../../assets/images/mask-white-new.svg";
import { useNavigate } from "react-router-dom";

const AboutSection = ({ paginationText, title, introText, galleryItems }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = (id, url, itemThumbnail) => {
    url = url.split("/").filter(Boolean).pop();
    url = typeof url === "string" ? url : String(url);
    url = url ? url.replace(/[^a-zA-Z0-9\-]+/g, "-").replace(/\s+/g, "-") : "";

    const queryString = `?id=${id}&title=${encodeURIComponent(url)}`;
    setSelectedImage({ item_id: id, item_thumbnail: itemThumbnail });
    setTimeout(() => {
      const fullPath = `/service-details${queryString}`;
      navigate(fullPath, { state: { selectedImageId: id, selectedImage: itemThumbnail, isSamePageNavigation: 8888 } });
    }, 2000); // Delay navigation until animation completes
  };

  return (
    <div id="next-section">
      <div className="col-12 ft_msk_left">
        <img src={othersLeftMask} alt="mask icon" />
      </div>
      <div className="container-fluid">
        <div className="col-12 smll_bx_wht">
          <img src={maskWhiteNew} alt="mask icon" />
        </div>
        <div className="pagination-text row justify-content-between align-items-center py-5">
          <div className="col-6">
            <h6>{paginationText}</h6>
          </div>
          <div className="col-6">
            <h5>ABOUT</h5>
          </div>
        </div>

        <div className="row pt-100 about-content-wrapper">
          <div className="col-12">
            <div className="head_head">
              <h2 className="title-text text_gradient">{title}</h2>
            </div>
          </div>
        </div>

        <div
          className="about_intro_area"
          style={{
            backgroundColor: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <div className="featured_intro">
            <h3>
              <Typewriter textArray={[introText]} period={2000} speed={100} />
            </h3>
          </div>
        </div>

        <section className="gallery-work-details-area gallery-bg-white">
          <div className="row">
            <div className="col-12">
              <div className="first_row_gallery row">
                <div className={`col-md-6 left_module`}>
                  {galleryItems.length > 0 ? (
                    galleryItems.slice(0, 3).map((item, index) => (
                      <motion.div
                        key={item.id}
                        layoutId={`image-${item.id}`}
                        onClick={() => handleImageClick(item.id, item.permalink, item.featured_image)}
                        style={{ cursor: "pointer" }}
                      >
                        <a href="javascript:void(0)">
                          <div key={index} className="glry_hm" data-aos="fade-up">
                            <div className="glry_hm_image">
                              <img
                                className="module-gallery-image"
                                src={item.featured_image}
                                alt={item.title}
                              />
                            </div>
                            <h5>{item.title}</h5>
                          </div>
                        </a>
                      </motion.div>
                    ))
                  ) : (
                    <p>No gallery items available</p>
                  )}
                </div>

                <div className={`col-md-5 rt_module`}>
                  {galleryItems.length > 0 ? (
                    galleryItems.slice(3).map((item, index) => (
                      <motion.div
                        key={item.id}
                        layoutId={`image-${item.id}`}
                        onClick={() => handleImageClick(item.id, item.permalink, item.featured_image)}
                        style={{ cursor: "pointer" }}
                      >
                        <a href="javascript:void(0)">
                          <div key={index} className="glry_hm" data-aos="fade-up">
                            <div className="glry_hm_image">
                              <img
                                className="module-gallery-image"
                                src={item.featured_image}
                                alt={item.title}
                              />
                            </div>
                            <h5>{item.title}</h5>
                          </div>
                        </a>
                      </motion.div>
                    ))
                  ) : (
                    <p>No gallery items available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fullscreen Overlay for Selected Image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              key="fullscreen-image"
              layoutId={`image-${selectedImage.item_id}`}
              className="fullscreen-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.0, ease: "easeInOut" }}
              onAnimationComplete={() => setLoading(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 1000,
                background: `url(${selectedImage.item_thumbnail}) center center / cover no-repeat`,
              }}
              onClick={() => setSelectedImage(null)} // Close overlay on click
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutSection;
