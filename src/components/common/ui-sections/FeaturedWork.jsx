import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Typewriter from "../animations/Typewriter";
import "../../../styles/gallery.css";
import MaskWhite from "../../../assets/images/mask-white.svg";
import EllipseMore from "../../../assets/images/ellipse-more.svg";
import "../../../styles/other-work.css";

const FeaturedWork = ({
  features: { pagination, title, short_title, description, works },
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = (work, thumbnail,post_video) => {
    setSelectedImage(work); // Set the selected image for fullscreen zoom
    setTimeout(() => {
      // Redirect to the details page after animation
      const url = work.item_title.replace(/\s+/g, "-"); // URL-friendly title
      const queryString = `?id=${work.item_id}&title=${encodeURIComponent(url)}`;
      navigate(`/content${queryString}`, { state: { selectedImageId: work.item_id ,selectedImage:thumbnail, postVideo:post_video} });
    }, 100); // Wait for the animation duration (adjust to match the transition time)
  };

  return (
    <section className="featured_work_area" id="work-section">
      <div className="container-fluid">
        <div className="col-12 smll_bx_wht">
          <img src={MaskWhite} alt="maskImage" />
        </div>

        <div className="row justify-content-between align-items-center py-5">
          <div className="col-6">
            <h6>{pagination}</h6>
          </div>
          <div className="col-6">
            <h5>{title}</h5>
          </div>
        </div>

        <div className="row pt-100">
          <div className="col-12">
            <div className="head_head">
              <h2 className="fadeinBottom">{short_title}</h2>
            </div>
            <div className="featured_intro fadeinBottom">
              <div className="ftr_intro_animie">
                <Typewriter
                  textArray={[description]}
                  period={2000}
                  speed={100}
                  customClass="typewrite"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="photo-gallery">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 gallery-grid">
            {works.map((work) => (
              <div className="col box-gallery" key={work.id}>
                <motion.div
                  key={work.item_id}
                  layoutId={`image-${work.item_id}`}
                  onClick={() => handleImageClick(work, work.item_thumbnail,work.post_video)} // Handle zoom and redirect
                  style={{ cursor: "pointer" }}
                >
                  <div className="gallery-item">
                    <div className="item_image">
                      <img
                        src={work.item_thumbnail}
                        className="img-fluid w-100 d-block"
                        alt="GalleryImage"
                      />
                    </div>
                    <div className="desc_pic">
                      <div className="wdth_ttle">
                        <h2
                          dangerouslySetInnerHTML={{ __html: work.item_title }}
                        />
                      </div>
                      <ul className="list-group list-group-horizontal">
                        {work.item_services.map((item, idx) => (
                          <li
                            className="list-group-item list-group-item-dark"
                            key={idx}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen image overlay */}
      {/*<AnimatePresence>
      {selectedImage && (
      <motion.div
      key="fullscreen-image"
      layoutId={`image-${selectedImage.item_id}`}
      className="fullscreen-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        exit: { duration: 0.8, delay: 2 }, // Delay before exit
      }}
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
      </AnimatePresence>*/}

    </section>
  );
};

export default FeaturedWork;
