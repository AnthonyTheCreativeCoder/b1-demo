import React from "react";
import barba from "@barba/core";
import SplashContainer from "../common/animations/splashAnime/SplashContainer";
import lorem from "../common/lorem";
import HeroSection from "../common/ui-sections/workHeroSection";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import { heroImage } from "../../assets";
import AboutDescription from "../common/ui-sections/AboutDescription";
import useAboutDetails from "../../hooks/react-query/useAboutDetails";


function About() {

  const { data, error, isLoading } = useAboutDetails();
  const short_description = data?.about_data?.short_desscription || '';
  const heading = data?.about_data?.title || '';
  

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
          title: heading,
          description: short_description,
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
