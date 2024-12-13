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
      <ArrowBounce id="next-section" />
      {/* <FeaturedService
        service={{
          pagination: lorem.service.pagination.first,
          title: "service",
          short_title: "Featured",
          description: lorem.sort_desc,
          works: galleryItemsData,
        }}
      /> */}
      <section className="home-page-adventure-wrapper">
        <SplashContainer />
        <AboutSection
          paginationText={lorem.service.pagination.second}
          title={"Adventure"}
          introText={lorem.description}
          galleryItems={galleryItemsData}
        />
      </section>
    </>
  );
};

export default Service;
