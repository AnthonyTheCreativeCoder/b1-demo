import React, { Suspense, useTransition, useState, useEffect } from "react";
import HeroSection from "../common/ui-sections/workHeroSection";
import lorem from "../common/lorem";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import SplashContainer from "../common/animations/splashAnime/SplashContainer";
import AboutSection from "../common/ui-sections/AboutSection";
import { heroImage } from "../../assets";
import useService from "../../hooks/react-query/useService";
import useServiceContent from "../../hooks/react-query/useServiceContent";
import "../../styles/preloader-style.css";

// Placeholder components for smoother loading
const HeroSectionPlaceholder = () => (
  <div className="hero-section-placeholder">
    <div className="skeleton hero-image" />
    <div className="skeleton hero-title" />
    <div className="skeleton hero-description" />
  </div>
);

const AboutSectionPlaceholder = () => (
  <div className="about-section-placeholder">
    <div className="skeleton about-title" />
    <div className="skeleton about-intro-text" />
    <div className="skeleton gallery-items" />
  </div>
);

const SplashContainerPlaceholder = () => (
  <div className="splash-container-placeholder">
    <div className="skeleton splash-animation" />
  </div>
);

// This component will render while data is loading
const ServiceContent = () => {
  const { dataser, errordata, isLoadingdata } = useServiceContent();
  const { data, error, isLoading } = useService();
  const [isPending, startTransition] = useTransition();
  const [works, setWorks] = useState({});

  useEffect(() => {
    if (!isLoading && data) {
      startTransition(() => {
        setWorks(data);
      });
    }
  }, [isLoading, data, startTransition]);

  if (isLoadingdata || isLoading || isPending) {
    
    return (
      <div className="loading-state">
        <HeroSectionPlaceholder />
        <SplashContainerPlaceholder />
        <AboutSectionPlaceholder />

            <div className="loading-container">
            <p>Loading...</p>
            </div>
      </div>
    );
  }

  if (errordata || error) {
    return <p>Error loading data: {errordata || error.message}</p>;
  }

  const serviceshort_description = dataser?.service_data?.sub_description || 'Loream Ipsum';
  const servicetitle = dataser?.service_data?.title || 'Loream Ipsum';
  const servicecontent = dataser?.service_data?.description || 'Loream Ipsum';
  const servicesubtitle = dataser?.service_data?.sub_heading || 'Loream Ipsum';

  return (
    <div data-barba="container" data-barba-namespace="home">
      <HeroSection
        banner={{
          image: heroImage,
          title: servicetitle,
          description: serviceshort_description,
        }}
      />
      <ArrowBounce id="next-section" />
      <section className="home-page-adventure-wrapper">
        <SplashContainer />
        <AboutSection
          paginationText={lorem.service.pagination.second}
          title={servicesubtitle}
          introText={servicecontent}
          galleryItems={works.services || []}
        />
      </section>
    </div>
  );
};

// Main component wrapped with Suspense to handle async data loading
const Service = () => {
  return (
    <Suspense fallback={<div className="service-skeleton-loading">
      <HeroSectionPlaceholder />
      <SplashContainerPlaceholder />
      <AboutSectionPlaceholder />
    </div>}>
      <ServiceContent />
    </Suspense>
  );
};

export default Service;
