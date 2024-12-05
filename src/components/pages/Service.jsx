import React from "react";
import HeroSection from "../common/ui-sections/workHeroSection";
import { galleryItemsData } from "../common/defaultWorks";
import lorem from "../common/lorem";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import SplashContainer from "../common/animations/splashAnime/SplashContainer";
import AboutSection from "../common/ui-sections/AboutSection";
//import FeaturedService from "../common/ui-sections/service/FeaturedService";
import { heroImage } from "../../assets";
import useService from "../../hooks/react-query/useService";

const Service = () => {
  return (
    <>
      <HeroSection
        banner={{
          image: heroImage,
          title: "Services",
          description: lorem.description,
        }}
      />
      
    </>
  );
};

export default Service;
