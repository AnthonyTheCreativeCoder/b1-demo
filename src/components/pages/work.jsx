import React from "react";
import HeroSection from "../common/ui-sections/workHeroSection";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import FeaturedWork from "../common/ui-sections/FeaturedWork";
import OtherWork from "../common/ui-sections/OtherWork";
import useWorks from "../../hooks/react-query/useWorks";

const WorkPage = () => {
  const { data, error, isLoading } = useWorks();
  const works = data || {};  // Default to an empty object if data is undefined

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <>
      <HeroSection
        banner={{
          image: works.image_banner ?? "",  // Destructure with defaults
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
          works: works.featured_work_items ?? [],  // Default to an empty array
        }}
      />
      <OtherWork
        otherProjects={{
          pagination: works.project_section_pagination ?? "",
          title: works.project_section_title ?? "",
          short_title: works.project_section_short_title ?? "",
          description: works.project_section_description ?? "",
          projects: works.non_featured_work_items ?? [],  // Default to an empty array
        }}
      />
    </>
  );
};

export default WorkPage;
