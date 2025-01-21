import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../../styles/PageContent.css";
import useWorkDetails from "../../hooks/react-query/useWorkDetails";
import BreadcrumbBanner from "../common/ui-sections/BreadcrumbBanner";
import { KlineDesign, klineLogo } from "../../assets";
import ArrowBounce from "../common/ui-sections/ArrowBounceInner";
import MoreWork from "../common/ui-sections/MoreWork";
import VideoSection from '../common/ui-sections/VideoSection';
import Approach from "../common/ui-sections/Approach";
import lorem from "../common/lorem";
import HorizontalSlider from "../common/animations/HorizontalSlider";
import Testimonial from "../common/ui-sections/Testimonial";
import GalleryWorkDetailsWhite from "../common/ui-sections/GalleryWorkDetailsWhite";
import LaptopAnimation from "../common/animations/LaptopAnimation";
import CardContent from "../../components/common/ui-snippets/CardContent";
import GalleryWorkDetails from "../common/ui-sections/GalleryWorkDetails";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import {
  WORK_DETAILS_IMAGES,
  workdetailsMobileGallery,
} from "../common/defaultWorks";


import '../../styles/overview.css';
import WhiteSmallTiles from "../../assets/images/white-small-tiles.png";
import Typewriter from '../common/animations/Typewriter';
import '../../styles/video-style.css';

// Sample images
const images = [

];

export default function PageContent() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let title = queryParams.get("title");

  title = title ? title.replace(/\s+/g, "-") : ""; // Replace spaces with hyphens

  const { data, error, isLoading } = useWorkDetails(title);
  const work = data;

  const navigate = useNavigate();
  const { selectedImageId } = location.state || {};
  const { selectedImage } = location.state || {};
  const { itemContents } = location.state || {};


  const itemContentsArray = itemContents ? itemContents.split(',') : [];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available for the title: {title}</div>;

  // if (isLoading || error || !data) return null;

  return (
    <div className="bannerWorkDetails" style={{ minHeight: "100vh" }}>
      {/* Fullscreen Image Section */}
      <div
        style={{
          backgroundImage: `url(${selectedImage})`,
        }}
        className="imageBannerDetails"
      >
        {/* Overlay */}
        <div className="overlayDetails"></div>

        {/* Title Centered */}
        <div className="motionBannerArea">
          <h1 className="cssanimation sequence fadeInBottom">
            {work?.post_title}
          </h1>
        </div>

        {/* ArrowBounceInner */}
        <ArrowBounce id="overview-section" />
      </div>


      {/* Breadcrumb Banner */}

      {itemContentsArray && itemContentsArray.length > 0 && work?.work_logo && (
        <BreadcrumbBanner
          services={itemContentsArray}
          logo={work?.work_logo}
        />
      )}


      {/* Overview Section */}
      <section className="overview_area" id="overview-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="overview_intro_head" data-aos-delay="100" data-aos="fade-up">
                <img src={WhiteSmallTiles} alt="whiteBoxTiles" />
                <Typewriter
                  textArray={["Overview"]}
                  period={2000}
                  speed={300}
                  customclassName="typewrite"
                />
              </div>
            </div>
            <div className="col-sm-8">
              <div className="overview_intro_para cssanimation sequence" data-aos-delay="300" data-aos="fade-up">
                <Typewriter
                  textArray={[work?.work_details_page_typing_description || ""]}
                  period={2000}
                  speed={100}
                  customclassName="typewrite"
                />

                {work?.work_details_page_button_link?.startsWith('http') && (
                  <Link
                    to={work.work_details_page_button_link}
                    className="white_btn_black_bg mt-5"
                  >
                    {work?.work_details_page_button_title}
                  </Link>
                )}


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {work?.work_details_page_video_url && (
        <VideoSection video_url={work?.work_details_page_video_url} />
      )}


      {/* Approach and Challenge */}
          {work?.work_details_page_challange_section_title && 
          work?.work_details_page_challange_section_description && 
          work?.work_details_page_approach_section_title && 
          work?.work_details_page_approach_section_description && (
          <Approach
          challenge={{
            title: work?.work_details_page_challange_section_title || '',
            description: work?.work_details_page_challange_section_description || '',
          }}
          approach={{
            title: work?.work_details_page_approach_section_title || '',
            description: work?.work_details_page_approach_section_description || '',
          }}
          />
          )
          }


      {/* Lazy Load Section */}
      <LazyLoadComponent>


        {work?.work_details_page_laptop_section_animation ? (
          <LaptopAnimation inLaptopImage={work?.work_details_page_laptop_section_animation} />
        ) : null}
        <div className="blankspace_area"></div>
        {work?.work_details_page_mobile_horizontal_slider_section_title &&
          work?.work_details_page_mobile_horizontal_slider_section_description &&
          Array.isArray(work?.work_details_page_mobile_gallery) &&
          work?.work_details_page_mobile_gallery.length > 0 && (
            <HorizontalSlider
              mobileSection={{
                title: work?.work_details_page_mobile_horizontal_slider_section_title || '',
                description: work?.work_details_page_mobile_horizontal_slider_section_description || '',
                mobileGallery: work?.work_details_page_mobile_gallery
              }}
            />
          )
        }

        {Array.isArray(work?.work_details_page_testimonials) && work?.work_details_page_testimonials.length > 0 && (
          <Testimonial
            testimonials={work?.work_details_page_testimonials}
          />
        )}

      </LazyLoadComponent>

      {/* Second Approach Section */}
      {work?.work_details_page_second_approach_section_title && work?.work_details_page_second_approach_section_description && (
        <section className="appraoch_area pt-5 pb-5">
          <div className="container-fluid">
            <div className="row approach-gap justify-content-end">
              <CardContent
                title={work?.work_details_page_second_approach_section_title}
                description={work?.work_details_page_second_approach_section_description}
              />
            </div>
          </div>
        </section>
      )}


      {/* Gallery Section */}
      {Array.isArray(work?.work_details_page_gallery_section) && work?.work_details_page_gallery_section.length > 0 && (
        <GalleryWorkDetails
          workDetailsImage={work?.work_details_page_gallery_section}
        />
      )}


      {/* Third Approach Section */}
      {work?.work_details_page_third_approach_section_title && work?.work_details_page_third_approach_section_description && (
        <section className="appraoch_area approach-bg-white">
          <div className="container-fluid">
            <div className="row approach-gap">
              <CardContent
                title={work?.work_details_page_third_approach_section_title}
                description={work?.work_details_page_third_approach_section_description}
                bgBlackImg={true}
              />
            </div>
          </div>
        </section>
      )}
      {/* Gallery Work Details White */}
      {Array.isArray(work?.work_details_page_module_gallery_section) && work?.work_details_page_module_gallery_section.length > 0 && (
        <GalleryWorkDetailsWhite
          galleryImages={work?.work_details_page_module_gallery_section}
        />
      )}


      {work?.work_details_page_more_work &&
        (Array.isArray(work?.work_details_page_more_work) || typeof work?.work_details_page_more_work === "object") && (
          <MoreWork
            moreWorks={work?.work_details_page_more_work}
          />
        )
      }


    </div>
  );

}
