import React from "react";
import barba from "@barba/core";
import SplashContainer from "../common/animations/splashAnime/SplashContainer";
import lorem from "../common/lorem";
import HeroSection from "../common/ui-sections/workHeroSection";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import { heroImage } from "../../assets";
import AboutDescription from "../common/ui-sections/AboutDescription";

function About() {

   const handleClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const link = e.currentTarget;
    barba.go(link.href); // Trigger the Barba.js transition programmatically
  };

  return (
   <div data-barba="container" data-barba-namespace="home">
      <HeroSection
        banner={{
          image: heroImage,
          title: "About",
          description: lorem.description,
        }}
      />
      <ArrowBounce id="next-section" />
      <section className="aboutDescWrapper">
        <SplashContainer />
        <AboutDescription  />

        
      </section>
    </div>
  );
}

export default About;
