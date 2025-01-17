import React from "react";
import LaptopAnimation from "../common/animations/LaptopAnimation";
import GalleryWorkDetails from "../common/ui-sections/GalleryWorkDetails";
import BreadcrumbBanner from "../common/ui-sections/BreadcrumbBanner";
import VideoSection from "../common/ui-sections/VideoSection";
import WorkDetailsBanner from "../common/ui-sections/WorkDetailsBanner";
import Approach from "../common/ui-sections/Approach";
import HorizontalSlider from "../common/animations/HorizontalSlider";
import GalleryWorkDetailsWhite from "../common/ui-sections/GalleryWorkDetailsWhite";
import CardContent from "../../components/common/ui-snippets/CardContent";
import OverviewSection from "../common/ui-sections/OverviewSection";
import MoreWork from "../common/ui-sections/MoreWork";
import { useParams } from "react-router-dom";

import { LazyLoadComponent } from "react-lazy-load-image-component";
import {
  WORK_DETAILS_IMAGES,
  workdetailsMobileGallery,
} from "../common/defaultWorks";
import lorem from "../common/lorem";
import WorkDetailsHero from "../../assets/images/work-details-hero.webp";
import { KlineDesign, klineLogo } from "../../assets";
import useWorkDetails from "../../hooks/react-query/useWorkDetails";


export default function WorkDetails() {
  const { id } = useParams();
  const { data } = useWorkDetails({ id });
  const work = data;
  return (
    <div data-barba="container" data-barba-namespace="home">
      <WorkDetailsBanner
        banner={
          work?.work_details_page_banner
            ? work?.work_details_page_banner
            : WorkDetailsHero
        }
        title={work?.post_title ? work?.post_title : ""}
      />
      <BreadcrumbBanner
        services={
          work?.item_services.length > 0
            ? work?.item_services
            : lorem.post_content.split("/")
        }
        logo={work?.work_logo ? work?.work_logo : klineLogo}
      />
      <OverviewSection
        overview={{
          title: work?.work_details_page_overview_title
            ? work?.work_details_page_overview_title
            : lorem.overview.title,
          description: work?.work_details_page_typing_description
            ? work?.work_details_page_typing_description
            : lorem.overview.description,
        }}
      />
      <VideoSection video_url={work?.work_details_page_video_url} />
      <Approach
        challenge={{
          title: work?.work_details_page_challange_section_title
            ? work?.work_details_page_challange_section_title
            : lorem.challenge.title,
          description: work?.work_details_page_challange_section_description
            ? work?.work_details_page_challange_section_description
            : lorem.challenge.description,
        }}
        approach={{
          title: work?.work_details_page_approach_section_title
            ? work?.work_details_page_approach_section_title
            : lorem.approach.title,
          description: work?.work_details_page_approach_section_description
            ? work?.work_details_page_approach_section_description
            : lorem.approach.description,
        }}
      />
      <LazyLoadComponent>
        <LaptopAnimation
          inLaptopImage={
            work?.work_details_page_laptop_section_animation
              ? work.work_details_page_laptop_section_animation
              : KlineDesign
          }
        />
        <HorizontalSlider
          mobileSection={{
            title:
              work?.work_details_page_mobile_horizontal_slider_section_title
                ? work.work_details_page_mobile_horizontal_slider_section_title
                : lorem.mobile.title,
            description:
              work?.work_details_page_mobile_horizontal_slider_section_description
                ? work.work_details_page_mobile_horizontal_slider_section_description
                : lorem.mobile.description,
            mobileGallery:
              typeof work?.work_details_page_mobile_gallery === "object" &&
              work?.work_details_page_mobile_gallery?.length > 0
                ? work?.work_details_page_mobile_gallery
                : workdetailsMobileGallery,
          }}
        />
        
      </LazyLoadComponent>
      <section className="appraoch_area pt-5 pb-5">
        <div className="container-fluid">
          <div className="row approach-gap justify-content-end">
            <CardContent
              title={
                work?.work_details_page_second_approach_section_title
                  ? work?.work_details_page_second_approach_section_title
                  : lorem.card.title
              }
              description={
                work?.work_details_page_second_approach_section_description
                  ? work?.work_details_page_second_approach_section_description
                  : lorem.testimonial
              }
            />
          </div>
        </div>
      </section>
      <GalleryWorkDetails
        workDetailsImage={
          typeof work?.work_details_page_gallery_section === "object" &&
          work?.work_details_page_gallery_section.length > 0
            ? work?.work_details_page_gallery_section
            : WORK_DETAILS_IMAGES
        }
      />
      <section className="appraoch_area approach-bg-white">
        <div className="container-fluid">
          <div className="row approach-gap">
            <CardContent
              title={
                work?.work_details_page_third_approach_section_title
                  ? work?.work_details_page_third_approach_section_title
                  : lorem.card.title
              }
              description={
                work?.work_details_page_third_approach_section_description
                  ? work?.work_details_page_third_approach_section_description
                  : lorem.testimonial
              }
              bgBlackImg={true}
            />
          </div>
        </div>
      </section>
      {/* for now its static */}
      <GalleryWorkDetailsWhite
        galleryImages={work?.work_details_page_module_gallery_section}
      />
      {/* for now its static */}
      <MoreWork
        moreWorks={
          typeof work?.work_details_page_more_work === "object"
            ? work?.work_details_page_more_work
            : lorem.moreWork.works
        }
      />
  </div>
  );
}