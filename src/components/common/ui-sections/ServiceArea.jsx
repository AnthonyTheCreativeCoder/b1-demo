import React from "react";

import "../../../styles/rain-animation.css";
import "../../../styles/services-home.css";
import SplashContainer from "../animations/splashAnime/SplashContainer";
import Typewriter from "../animations/Typewriter";
import rainBox from "../../../assets/images/home-services-rain-box.png";
import developmentIcon from "../../../assets/images/development-icon.png";
import arrowRight from "../../../assets/images/arrow-right.svg";
import { Link } from "react-router-dom";

const ServiceArea = ({
  paginationText,
  services,
  title,
  image,
  description,
}) => {
  return (
    <section className="service_area_home" id="services-section">
      {/* Splash boxes start */}
      <SplashContainer />
      {/* Splash boxes End */}

      <div className="col-12 ft_msk_left">
        <img src={rainBox} alt="mask image" />
      </div>

      <div className="container-fluid">
        <div className="row justify-content-between align-items-center py-5">
          <div className="col-6">
            <h6>{paginationText}</h6>
          </div>
          <div className="col-6">
            <h5>{title}</h5>
          </div>
        </div>
        <div className="row pt-100">
          <div className="col-12">
            <div className="featured_intro fadeinBottom">
              <h3>
                <Typewriter
                  textArray={[description]}
                  period={2000}
                  speed={100}
                />
              </h3>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5 mb-5">
          <div className="row">
            <div className="col-12">
              <Link to={"/services"} className="btn_cmn border-animation">
                View All
              </Link>
              {/* <a href="javascript:void(0)" className="btn_cmn border-animation">
                <span className="border-animation-inner"></span>
                View All
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Project Gallery start */}
      <div className="project_details">
        {services.slice(0, 5).map((service, index) => (
          <div
            className={`pro-details-row ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <a href="javascript:void(0)">
              <div className="container-fluid row py-5 align-items-center">
                <div className="row">
                  <div className="col-lg-11 col-sm-11 proIconArea">
                    <img
                      className="pro_icon"
                      src={service.item_thumbnail}
                      alt={service.item_url}
                    />
                    <h4 className="text-start font-bld">
                      {service.item_title}
                    </h4>
                  </div>
                  <div className="col-lg-1 col-sm-1 right_arrow_section">
                    {/*<img src={arrowRight} alt="Right arrow icon" />*/}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      {/* Project Gallery End */}
    </section>
  );
};

export default ServiceArea;
