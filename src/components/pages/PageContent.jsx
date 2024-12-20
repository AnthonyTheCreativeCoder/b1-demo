import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../../styles/PageContent.css";
import useWorkDetails from "../../hooks/react-query/useWorkDetails";
import BreadcrumbBanner from "../common/ui-sections/BreadcrumbBanner";
import { KlineDesign, klineLogo } from "../../assets";
import ArrowBounceInner from "../common/ui-sections/ArrowBounceInner";
import OverviewSection from "../common/ui-sections/OverviewSection";
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
  { id: 107, src: "https://wordpress-1360300-5087149.cloudwaysapps.com/wp-content/uploads/2024/09/gallery-8.jpg" },
  { id: 104, src: "https://wordpress-1360300-5087149.cloudwaysapps.com/wp-content/uploads/2024/09/gallery-5.jpg" },
  { id: 100, src: "https://wordpress-1360300-5087149.cloudwaysapps.com/wp-content/uploads/2024/09/gallery-7.jpg" },
  { id: 105, src: "https://wordpress-1360300-5087149.cloudwaysapps.com/wp-content/uploads/2024/09/gallery-6.jpg" },
  { id: 42, src: "https://wordpress-1360300-5087149.cloudwaysapps.com/wp-content/uploads/2024/09/bg3.png" },
  { id: 98, src: "https://wordpress-1360300-5087149.cloudwaysapps.com/wp-content/uploads/2024/09/gallery-3.jpg" },
  { id: 27, src: "https://wordpress-1360300-5087149.cloudwaysapps.com/wp-content/uploads/2024/09/bg.png" },
  { id: 28, src: "https://wordpress-1360300-5087149.cloudwaysapps.com/wp-content/uploads/2024/09/bg2.png" },
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
  const selectedImage = images.find((img) => img.id === selectedImageId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available for the title: {title}</div>;

   // if (isLoading || error || !data) return null;

  return (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

    {/* Fullscreen Image Section */}
    <motion.div
      layoutId={`image-${selectedImageId}`}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: `url(${selectedImage?.src}) center center / cover no-repeat`,
      }}
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      exit={{ scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker black overlay
          zIndex: 1,
        }}
      ></div>

      {/* Title Centered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <h1 className="cssanimation sequence fadeInBottom" style={{ fontSize: "6rem", margin: "0", fontFamily: "elzablack" }}>
          {work?.post_title || "Kline"}
        </h1>
      </motion.div>

      {/* ArrowBounceInner */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      >
        <ArrowBounceInner />
      </div>
    </motion.div>

    {/* Breadcrumb Banner */}
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: "20px",
        flexShrink: 0,
      }}
    >
      <BreadcrumbBanner
        services={work?.item_services.length > 0 ? work?.item_services : work.post_content.split("/")}
        logo={work?.work_logo || klineLogo}
      />
    </div>

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
                textArray={[work?.work_details_page_typing_description || "Hello There"]}
                period={2000}
                speed={100}
                customclassName="typewrite"
              />
              <Link className="white_btn_black_bg mt-5">{work?.work_details_page_button_title}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Video Section */}
    <section className="video_section">
      <div className="container-fluid">
        <img className="video_area" src={work?.work_details_page_video_image || ''} alt="video" />
      </div>
    </section>

    {/* Approach and Challenge */}
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

    {/* Lazy Load Section */}
    <LazyLoadComponent>
      <LaptopAnimation
        inLaptopImage={work?.work_details_page_laptop_section_animation || KlineDesign}
      />
      <HorizontalSlider
        mobileSection={{
          title: work?.work_details_page_mobile_horizontal_slider_section_title || '',
          description: work?.work_details_page_mobile_horizontal_slider_section_description || '',
          mobileGallery: Array.isArray(work?.work_details_page_mobile_gallery) && work?.work_details_page_mobile_gallery.length > 0
            ? work?.work_details_page_mobile_gallery
            : workdetailsMobileGallery,
        }}
      />
      <Testimonial
        testimonials={Array.isArray(work.work_details_page_testimonials) && work?.work_details_page_testimonials.length > 0
          ? work?.work_details_page_testimonials
          : ''}
      />
    </LazyLoadComponent>

    {/* Second Approach Section */}
    <section className="appraoch_area pt-5 pb-5">
      <div className="container-fluid">
        <div className="row approach-gap justify-content-end">
          <CardContent
            title={work?.work_details_page_second_approach_section_title || lorem.card.title}
            description={work?.work_details_page_second_approach_section_description || ''}
          />
        </div>
      </div>
    </section>

    {/* Gallery Section */}
    <GalleryWorkDetails
      workDetailsImage={Array.isArray(work?.work_details_page_gallery_section) && work?.work_details_page_gallery_section.length > 0
        ? work?.work_details_page_gallery_section
        : WORK_DETAILS_IMAGES}
    />

    {/* Third Approach Section */}
    <section className="appraoch_area approach-bg-white">
      <div className="container-fluid">
        <div className="row approach-gap">
          <CardContent
            title={work?.work_details_page_third_approach_section_title || lorem.card.title}
            description={work?.work_details_page_third_approach_section_description || lorem.testimonial}
            bgBlackImg={true}
          />
        </div>
      </div>
    </section>

    {/* Gallery Work Details White */}
    <GalleryWorkDetailsWhite
      galleryImages={work?.work_details_page_module_gallery_section}
    />

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
