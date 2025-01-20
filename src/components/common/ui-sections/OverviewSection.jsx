import React from "react";
import "../../../styles/overview.css";
import WhiteSmallTiles from "../../../assets/images/white-small-tiles.png";
import Typewriter from "../animations/Typewriter";

const OverviewSection = ({ overview: { title, description } }) => {
  return (
    <section className="overview_area" id="overview-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <div
              className="overview_intro_head"
              data-aos-delay="100"
              data-aos="fade-up"
            >
              <img src={WhiteSmallTiles} alt="whiteBoxTiles" />
              <Typewriter
                textArray={[title]}
                period={2000}
                speed={300}
                customClass="typewrite"
              />
            </div>
          </div>
          <div className="col-sm-8">
            <div
              className="overview_intro_para cssanimation sequence"
              data-aos-delay="300"
              data-aos="fade-up"
            >
             
              <Typewriter
                textArray={[description]}
                period={2000}
                speed={100}
                customClass="typewrite"
              />
              <a href="https://b1interactive.com/" target="_blank" rel="noreferrer" className="white_btn_black_bg mt-5">
                View Websites
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
