import React from "react";
import barba from "@barba/core";
import SplashContainer from "../common/animations/splashAnime/SplashContainer";
import lorem from "../common/lorem";
import HeroSection from "../common/ui-sections/workHeroSection";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import { heroImage } from "../../assets";
import ProjectDescription from "../common/ui-sections/ProjectDescription";
import { useLocation, useNavigate } from "react-router-dom";

function ProjectContent() {
   const location = useLocation();
   const handleClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const link = e.currentTarget;
    barba.go(link.href); // Trigger the Barba.js transition programmatically
  };
  const { itemTitle } = location.state || {};
  const { itemDescription } = location.state || {};
  // const { isSamePageNavigation } = location.state || {};

  return (
   <div className="nodesc" data-barba="container" data-barba-namespace="home">
      <HeroSection
        banner={{
          image: heroImage,
          title: itemTitle,
          description: '',
        }}
      />
      <ArrowBounce id="next-section" />
      <section className="aboutDescWrapper">
        <SplashContainer />
        <div className='container-fluid pt_cntnr_tp' id="next-section">
        <p>
        {itemDescription}
        </p>
        </div>
      </section>
    </div>
  );
}

export default ProjectContent;
