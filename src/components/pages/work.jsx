import React, { useState, useEffect, useTransition } from "react";
import HeroSection from "../common/ui-sections/workHeroSection";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import FeaturedWork from "../common/ui-sections/FeaturedWork";
import OtherWork from "../common/ui-sections/OtherWork";
import useWorks from "../../hooks/react-query/useWorks";
import "../../styles/preloader-work-style.css";

// Placeholder components for smoother loading
const HeroSectionPlaceholder = () => (
  <div className="hero-section-placeholder">
    <div className="skeleton hero-image" />
    <div className="skeleton hero-title" />
    <div className="skeleton hero-description" />
  </div>
);

const FeaturedWorkPlaceholder = () => (
  <div className="featured-work-placeholder">
    <div className="skeleton featured-title" />
    <div className="skeleton featured-description" />
    <div className="skeleton featured-items" />
  </div>
);

const OtherWorkPlaceholder = () => (
  <div className="other-work-placeholder">
    <div className="skeleton other-title" />
    <div className="skeleton other-description" />
    <div className="skeleton other-items" />
  </div>
);

// Main WorkPage component
const WorkPage = () => {
  const { data, error, isLoading } = useWorks();
  const [isPending, startTransition] = useTransition();
  const [works, setWorks] = useState({});

  // Once data is loaded, update the state using startTransition to avoid blocking the UI
  useEffect(() => {
    if (!isLoading && data) {
      startTransition(() => {
        setWorks(data); // Update works state after data is fetched
      });
    }else{
      if (isLoading || isPending) {
    return (
      <div className="loading-state">
        <HeroSectionPlaceholder />
        <FeaturedWorkPlaceholder />
        <OtherWorkPlaceholder />
      </div>
    );
  }
    }
  }, [isLoading, data, startTransition]);

  // Handle loading and error states
  

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
   <div data-barba="container" data-barba-namespace="home">
      <HeroSection
        banner={{
          image: works.image_banner ?? "", // Destructure with defaults
          title: works.banner_title ?? "",
          description: works.banner_description ?? "",
        }}
      />
      <ArrowBounce />
      <FeaturedWork
        features={{
          pagination: works.featured_work_section_pagination ?? "",
          title: works.featured_work_section_title ?? "",
          short_title: works.featured_work_section_short_title ?? "",
          description: works.featured_work_section_description ?? "",
          works: works.featured_work_items ?? [], // Default to an empty array
        }}
      />
      <OtherWork
        otherProjects={{
          pagination: works.project_section_pagination ?? "",
          title: works.project_section_title ?? "",
          short_title: works.project_section_short_title ?? "",
          description: works.project_section_description ?? "",
          projects: works.non_featured_work_items ?? [], // Default to an empty array
        }}
      />
    </div>
  );
};

export default WorkPage;
