import React, { startTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeBanner from "../common/ui-sections/HomeBanner";
import SplashContainer from "../common/animations/splashAnime/SplashContainer";
import HomeTypingArea from "../common/ui-sections/HomeTyping";
import WorkSection from "../common/ui-sections/WorkSection";
import AboutSection from "../common/ui-sections/AboutSection";
import ServiceArea from "../common/ui-sections/ServiceArea";
import useHome from "../../hooks/react-query/useHome";
import useService from "../../hooks/react-query/useService";
import Typewriter from "../common/animations/Typewriter";
import { Link, useNavigate } from "react-router-dom";
import maskWhiteNew from "../../assets/images/mask-white-new.svg";


const HomePage = () => {
  const { data, error } = useHome();
  const homedata = data;
  const paginationText = "02/03";
  

  const galleryItems = homedata?.adventure_items ? homedata.adventure_items : [];
   const [selectedImage, setSelectedImage] = useState(null);

  // console.log("============");
  // console.log(galleryItems);
  // console.log("============");

  const navigate = useNavigate();

//  const handleImageClick = (id, url) => {

//   url = url.split('/').filter(Boolean).pop();
    

//   // Ensure `url` is a string
//   url = typeof url === "string" ? url : String(url);

//   // Replace special characters and encode the URL
//   url = url ? url.replace(/[^a-zA-Z0-9\-]+/g, "-").replace(/\s+/g, "-") : "";

//   const queryString = `?id=${id}&title=${encodeURIComponent(url)}`;
//   const fullPath = `/service-details${queryString}`;
//   // const fullPath = `/content${queryString}`;
//   // console.log("Navigating to:", fullPath);

//   // Navigate to the URL with state
//   navigate(fullPath, { state: { selectedImageId: id } });
// };


   const handleImageClick = (work,permalink,featured_image) => {

    // console.log("work is => "+permalink+" featured_image "+featured_image);
    // console.log("post video is => "+post_video);
    setSelectedImage(work); // Set the selected image for fullscreen zoom
    setTimeout(() => {
      // Redirect to the details page after animation
      let url = permalink; // URL-friendly title
      url = url.split('/').filter(Boolean).pop();
       // url = url.split('/').filter(Boolean).pop();
      // Ensure `url` is a string
       // url = typeof url === "string" ? url : String(url);
      url = url ? url.replace(/[^a-zA-Z0-9\-]+/g, "-").replace(/\s+/g, "-") : "";


      const queryString = `?id=${work.item_id}&title=${encodeURIComponent(url)}`;
      navigate(`/service-details${queryString}`, { state: { selectedImageId: work.item_id, selectedImage:featured_image, isSamePageNavigation: 8888 } });
    }, 800); // Wait for the animation duration (adjust to match the transition time)
  };


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
      {/*  <AboutSection
          paginationText={homedata?.about_section_pagination}
          title={homedata?.about_section_short_title}
          introText={homedata?.about_section_description}
          galleryItems={homedata?.adventure_items}
        />*/}

        {/*Home page adventure section */}
        <div className="container-fluid">
        <div className="col-12 smll_bx_wht">
          <img src={maskWhiteNew} alt="mask icon" />
        </div>
        <div className="pagination-text row justify-content-between align-items-center py-5">
          <div className="col-6">
            <h6>{paginationText}</h6>
          </div>
          <div className="col-6">
            <h5>ABOUT</h5>
          </div>
        </div>
         <div className="row pt-100 about-content-wrapper">
          <div className="col-12">
            <div className="head_head">
              <h2 className="title-text text_gradient">{homedata?.about_section_short_title}</h2>
            </div>
          </div>
        </div>
        <div
          className="about_intro_area"
          style={{
            backgroundColor: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <div className="featured_intro">
            <h3>
              <Typewriter textArray={[homedata?.about_section_description]} period={2000} speed={100} />
            </h3>
          </div>
        </div>

       <div className="gallery-work-details-area gallery-bg-white">
     <div className="row">
        <div className="col-12">
          <div className="first_row_gallery row">
            <div className={`col-md-6 left_module`} >
              {galleryItems.length > 0 ? (
                galleryItems.slice(0, 3).map((item) => (
                  <motion.div
                    key={item.item_id} // Use a unique identifier for the key prop
                    layoutId={`image-${item.item_id}`} // Shared layout id for image animation
                    onClick={() => handleImageClick(item, item.item_url,item.item_thumbnail)}
                    style={{ cursor: 'pointer' }}
                  >
                     <a
                          href="javascript:void(0)"
                          dangerouslySetInnerHTML={{
                            __html: `<div class="glry_hm" data-aos="fade-up">
                                      <div class="glry_hm_image">
                                        <img class="module-gallery-image" src="${item.item_thumbnail}" alt="${item.item_title || "Gallery item"}" />
                                      </div>
                                      <h5>${item.item_title}</h5>
                                    </div>`
                          }}
                        ></a>
                  </motion.div>
                ))
              ) : (
                <p>No gallery items available</p>
              )}
            </div>

            <div className={`col-md-5 rt_module`} >
              {galleryItems.length > 0 ? (
                galleryItems.slice(3).map((item) => (
                  <motion.div
                    key={item.item_id} // Use a unique identifier for the key prop
                    layoutId={`image-${item.item_id}`} // Shared layout id for image animation
                    onClick={() => handleImageClick(item, item.item_url,item.item_thumbnail)}
                    style={{ cursor: 'pointer' }}
                  >
                    <a
                          href="javascript:void(0)"
                          dangerouslySetInnerHTML={{
                            __html: `<div class="glry_hm" data-aos="fade-up">
                                      <div class="glry_hm_image">
                                        <img class="module-gallery-image" src="${item.item_thumbnail}" alt="${item.item_title || "Gallery item"}" />
                                      </div>
                                      <h5>${item.item_title}</h5>
                                    </div>`
                          }}
                        ></a>
                  </motion.div>
                ))
              ) : (
                <p>No gallery items available</p>
              )}
            </div>
          </div>
        </div>
         <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="fullscreen-image"
            layoutId={`image-${selectedImage.item_id}`}
            className="fullscreen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 1000,
              background: `url(${selectedImage.item_thumbnail}) center center / cover no-repeat`,
            }}
          />
        )}
      </AnimatePresence>

      </div>
    </div>

</div>
        {/*Home page about section*/}




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


