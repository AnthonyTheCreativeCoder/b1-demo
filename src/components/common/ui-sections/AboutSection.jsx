import React from "react";
// import PropTypes from 'prop-types';
import Typewriter from "../animations/Typewriter";
import "../../../styles/GalleryWorkDetails-home.css";
import "../../../styles/AboutHome.css";
import "../../../styles/services-home.css";
import othersLeftMask from "../../../assets/images/others-left-mask.svg";
import maskWhiteNew from "../../../assets/images/mask-white-new.svg";
import { Link } from "react-router-dom";


const AboutSection = ({ paginationText, title, introText, galleryItems }) => {
  console.log(galleryItems)
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
                <Link to={"/service-details"}>
                  {galleryItems.slice(0, 3).map((item, index) => (
                    <div key={index} className="glry_hm" data-aos="fade-up">
                      <div className="glry_hm_image">
                        <img
                          className="module-gallery-image"
                          src={item.item_thumbnail}
                          alt={item.item_url}
                        />
                      </div>
                      <h5>{item.item_title}</h5>
                    </div>
                  ))}
                  </Link>
                </div>

                <div className={`col-md-5 rt_module`}>
                <Link to={"/service-details"}>
                  {galleryItems.slice(3).map((item, index) => (
                    <div key={index} className="glry_hm" data-aos="fade-up">
                      <div className="glry_hm_image">
                        <img
                          className="module-gallery-image"
                          src={item.item_thumbnail}
                          alt={item.item_url}
                        />
                      </div>
                      <h5>{item.item_title}</h5>
                    </div>
                  ))}
                  </Link>
                </div>

                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// AboutSection.propTypes = {
//   paginationText: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   introText: PropTypes.string.isRequired,
//   galleryItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       colSize: PropTypes.number.isRequired,
//       className: PropTypes.string.isRequired,
//       imageSrc: PropTypes.string.isRequired,
//       altText: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default AboutSection;
