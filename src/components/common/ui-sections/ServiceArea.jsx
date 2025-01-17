import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/rain-animation.css";
import "../../../styles/services-home.css";
import SplashContainer from "../animations/splashAnime/SplashContainer";
import Typewriter from "../animations/Typewriter";
import rainBox from "../../../assets/images/home-services-rain-box.png";

const ServiceArea = ({
  paginationText,
  services,
  title,
  image,
  description,
}) => {
  const navigate = useNavigate();
  const staticContentFunc = (service) => {
    // console.log(service);
    setTimeout(() => {
      navigate(`/post-details/home/${service.item_url}/`, { state: { itemTitle: service.item_title, itemURL:service.item_title,  itemID:service.item_id, itemDescription:service.item_description} });
    }, 100); // Wait for the state vale set properly
    };


  return (
    <section className="service_area_home" id="services-section">
      {/* Splash boxes start */}
      <SplashContainer />
      {/* Splash boxes End */}

      <div className="col-12 ft_msk_left">
        <img src={rainBox} alt="masked 11" />
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
            onClick={() => staticContentFunc(service)}>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a href="javascript:void(0);">
              <div className="container-fluid row py-5 align-items-center">
                <div className="row">
                  <div className="col-lg-11 col-sm-11 proIconArea">
                    <img
                      className="pro_icon"
                      src={service.item_thumbnail}
                      alt="Service Item"
                    />
                    <h4 className="text-start font-bld">
                      {service.item_title} 
                    </h4>
                  </div>
                  <div className="col-lg-1 col-sm-1 right_arrow_section">
                  <img src="/static/media/arrow-right.7b745aff3497202e7662f2d3e9831ade.svg" alt="RightArrowIcon" />
                  </div>
                </div>
              </div>
            </a>
            {/* eslint-enable jsx-a11y/anchor-is-valid */}
          </div>
        ))}
      </div>
      {/* Project Gallery End */}
    </section>
  );
};

export default ServiceArea;
