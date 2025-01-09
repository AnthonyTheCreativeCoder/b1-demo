import React, { Suspense, useTransition, useState, useEffect } from "react";
import HeroSection from "../common/ui-sections/workHeroSection";
import lorem from "../common/lorem";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import SplashContainer from "../common/animations/splashAnime/SplashContainer";
import AboutSection from "../common/ui-sections/AboutSection";
import { heroImage } from "../../assets";
import useService from "../../hooks/react-query/useService";
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
  const { data, error, isLoading } = useService();
  const [isPending, startTransition] = useTransition();
  const [works, setWorks] = useState({});

  // Once data is fetched, update the state using startTransition
  useEffect(() => {
    if (!isLoading && data) {
      startTransition(() => {
        setWorks(data);  // Update works state when data is available
      });
    }else{
      if (isLoading || isPending) {
    return (
      <div className="loading-state">
       <HeroSectionPlaceholder />
      <SplashContainerPlaceholder />
      <AboutSectionPlaceholder />
      </div>
    );
  }
    }
  }, [isLoading, data, startTransition]);

  // Handle loading and error states
  if (isLoading || isPending) return null; // Don't show loading text, use placeholders
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
   <div data-barba="container" data-barba-namespace="home">
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
          galleryItems={works.services || []} // Use works.services or fallback to empty array
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
