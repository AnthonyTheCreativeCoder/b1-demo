import React from "react";
import { motion } from "framer-motion";
// import PropTypes from 'prop-types';
import Typewriter from "../animations/Typewriter";
import "../../../styles/GalleryWorkDetails-home.css";
import "../../../styles/AboutHome.css";
import "../../../styles/services-home.css";
import othersLeftMask from "../../../assets/images/others-left-mask.svg";
import maskWhiteNew from "../../../assets/images/mask-white-new.svg";
import { Link, useNavigate } from "react-router-dom";


const AboutSection = ({ paginationText, title, introText, galleryItems }) => {

const navigate = useNavigate();

 const handleImageClick = (id, url, itemimage) => {
  // console.log("id is " + id);
  // console.log("url is " + url);

  url = url.split('/').filter(Boolean).pop();
    

  // Ensure `url` is a string
  url = typeof url === "string" ? url : String(url);

  // Replace special characters and encode the URL
  url = url ? url.replace(/[^a-zA-Z0-9\-]+/g, "-").replace(/\s+/g, "-") : "";

  const queryString = `?id=${id}&title=${encodeURIComponent(url)}`;
  const fullPath = `/service-details${queryString}`;
  // const fullPath = `/content${queryString}`;
  // console.log("Navigating to:", fullPath);

  // Navigate to the URL with state
  navigate(fullPath, { state: { selectedImageId: id , selectedImage:itemimage,isSamePageNavigation: 8888} }); // making image dynamic
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
                        galleryItems.slice(0,3).map((item, index) => (

                        <motion.div
                        key={item.id}
                        layoutId={`image-${item.id}`} // Shared layout id for image animation
                        onClick={() => handleImageClick(item.id,item.permalink, item.featured_image)}
                        style={{ cursor: "pointer" }}
                        >
                        <a href="javascript:void(0)">
                        <div key={index} className="glry_hm" data-aos="fade-up">
                        <div className="glry_hm_image">
                        <img
                        className="module-gallery-image"
                        src={item.featured_image}  // Use the correct property for the image
                        alt={item.title}  // Use the correct property for the title
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
                        layoutId={`image-${item.id}`} // Shared layout id for image animation
                        onClick={() => handleImageClick(item.id,item.permalink, item.featured_image)}
                        style={{ cursor: "pointer" }}
                        >

                        <a href="javascript:void(0)">
                        <div key={index} className="glry_hm" data-aos="fade-up">
                        <div className="glry_hm_image">
                        <img
                        className="module-gallery-image"
                        src={item.featured_image}  // Use the correct property for the image
                        alt={item.title}  // Use the correct property for the title
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
      </div>
    </div>
  );
};



export default AboutSection;
