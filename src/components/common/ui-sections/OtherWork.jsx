import React from "react";
import Typewriter from "../animations/Typewriter";
import BlackMask from "../../../assets/images/mask-black.svg";
import OtherLeftMask from "../../../assets/images/others-left-mask.svg";
import SplashContainer from "../animations/splashAnime/SplashContainer";
import ProjectDetails from "./ProjectDetails";

const OtherWork = ({
  otherProjects: { pagination, title, short_title, description, projects },
}) => {
  return (
    <section className="others_work_area" id="services-section">
      <SplashContainer />
      <div className="col-12 ft_msk_left">
        <img src={OtherLeftMask} alt="maskImage" />
      </div>
      <div className="container-fluid">
        <div className="col-12 ft_msk">
          <img src={BlackMask} alt="maskImage" />
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
              <h3>
                <Typewriter
                  textArray={[description]}
                  period={2000}
                  speed={100}
                  customClass="typewrite"
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
      <ProjectDetails projects={projects} />
    </section>
  );
};

export default OtherWork;
