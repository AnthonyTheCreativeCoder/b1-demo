import React from "react";
import HomeBanner from "../common/ui-sections/HomeBanner";
import SplashContainer from "../common/animations/splashAnime/SplashContainer";
import HomeTypingArea from "../common/ui-sections/HomeTyping";
import WorkSection from "../common/ui-sections/WorkSection";
import AboutSection from "../common/ui-sections/AboutSection";
import ServiceArea from "../common/ui-sections/ServiceArea";
import useHome from "../../hooks/react-query/useHome";
import useService from "../../hooks/react-query/useService";

const HomePage = () => {
  const { data, error } = useHome();
  const homedata = data;
  // console.log(homedata)
  return (
    <>
      <HomeBanner
        videoUrl={homedata?.video_banner}
        bannerText={homedata?.video_banner_text}
        bannerType={homedata?.banner_type}
        imageUrl={homedata?.image_banner}
      />

      <HomeTypingArea typingText={homedata?.home_typing_text} />

      <WorkSection
        title={homedata?.work_section_title}
        paginationText={homedata?.work_section_pagination}
        projects={homedata?.work_items}
        description={homedata?.work_section_description}
      />

      <section className="home-page-adventure-wrapper">
        <SplashContainer />
        <AboutSection
          paginationText={homedata?.about_section_pagination}
          title={homedata?.about_section_short_title}
          introText={homedata?.about_section_description}
          galleryItems={homedata?.adventure_items}
        />
      </section>

      <ServiceArea
        paginationText={homedata?.service_section_pagination}
        services={homedata?.service_items}
        title={homedata?.service_section_title}
        image={homedata?.service_section_image}
        description={homedata?.service_section_description}
      />
    </>
  );
};

export default HomePage;
