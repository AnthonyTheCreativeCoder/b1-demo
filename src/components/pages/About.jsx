import React from "react";
import SplashContainer from "../common/animations/splashAnime/SplashContainer";
import lorem from "../common/lorem";
import HeroSection from "../common/ui-sections/workHeroSection";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import { heroImage } from "../../assets";
import AboutDescription from "../common/ui-sections/AboutDescription";

function About() {
  return (
    <>
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
    </>
  );
}

export default About;
