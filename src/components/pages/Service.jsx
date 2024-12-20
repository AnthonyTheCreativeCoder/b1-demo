import React from "react";
import HeroSection from "../common/ui-sections/workHeroSection";
import { galleryItemsData } from "../common/defaultWorks";
import lorem from "../common/lorem";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import SplashContainer from "../common/animations/splashAnime/SplashContainer";
import AboutSection from "../common/ui-sections/AboutSection";
// import FeaturedService from "../common/ui-sections/service/FeaturedService";
import { heroImage } from "../../assets";
import useService from "../../hooks/react-query/useService";

const Service = () => {

  const { data, error, isLoading } = useService();
  const works = data || {};  // Default to an empty object if data is undefined

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  console.log("Rendering Service Component");
  console.log(works);


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
      <section className="home-page-adventure-wrapper">
        <SplashContainer />
        <AboutSection
          paginationText={lorem.service.pagination.second}
          title={"Adventure"}
          introText={lorem.description}
          galleryItems={works.services}
        />
      </section>
    </>
  );
};

export default Service;
