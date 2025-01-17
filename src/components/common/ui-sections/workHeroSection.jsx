import React from "react";
import "../../../styles/workHeroBanner.css";
import Typewriter from "../animations/Typewriter";

const HeroSection = ({ banner: { image, title, description } }) => {
  return (
    <section className="imageGrid">
      <picture>
        <img className="heroImage w-100 d-block" src={image} alt="Hero" />
      </picture>

      <div className="heroContent">
        <h1 className={`cssanimation sequence fadeInBottom`}>{title}</h1>
        <div className="wrapperAnimation cssanimation sequence fadeInBottom">
          <Typewriter
            textArray={[description]}
            period={2000}
            speed={100}
            customClass="text_gradient"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

