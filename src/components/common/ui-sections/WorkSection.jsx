import React from "react";
// import PropTypes from 'prop-types';
import Typewriter from "../animations/Typewriter";
import { Link } from "react-router-dom";
import "../../../styles/WorkHome.css";
import "../../../styles/overview.css";
import "../../../styles/breadcrumb.css";
import maskWhite from "../../../assets/images/mask-white.svg";

const WorkSection = ({ title, paginationText, projects, description }) => {
  return (
    <section className="home-page-work-wrapper" id="work-section">
      <div className="container-fluid">
        <div className="col-12 smll_bx_wht">
          <img src={maskWhite} alt="mask image" />
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
          {/* <span
            className="typewrite"
            data-period="2000"
            data-type='["Our work sem sollicitudin lacus, ut interdum tellus elit sed risus."]'
            style={{ '--speed': '100' }}
          ></span> */}
          <Typewriter textArray={[description]} period={2000} speed={100} />
        </h2>
        <div className="small-container-fluid">
          {projects.slice(0, 3).map((project, index) => (
            <div className="main-banner-wrapper" data-aos="fade-up" key={index}>
              <div className="abs_full">
                <div className="pos_full">
                  <a href="javascript:void(0)">
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
                            project.item_services.map((item) => (
                              <li className="list-group-item">{item}</li>
                            ))}
                          {/* <li>{project.item_content}</li> */}
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pb-200">
          <div className="white_btn_black border-animation">
            {/* <a href="#">View all work</a> */}
            <Link to="/works">View all work</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// WorkSection.propTypes = {
//   paginationText: PropTypes.string.isRequired,
//   projects: PropTypes.arrayOf(
//     PropTypes.shape({
//       link: PropTypes.string.isRequired,
//       imageSrc: PropTypes.string.isRequired,
//       altText: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       logoSrc: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default WorkSection;
