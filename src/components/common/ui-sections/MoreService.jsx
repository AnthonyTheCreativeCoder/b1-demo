import React, { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../styles/gallery.css";
import "../../../styles/AboutHome.css";
import "../../../styles/GalleryWorkDetails-home.css";
import SplashDetailsContainer from "../animations/splashAnime/SplashDetailsContainer";
import useService from "../../../hooks/react-query/useService";

const MoreWork = ({ moreWorkId }) => {
  const navigate = useNavigate();
  const location = useLocation(); // To detect URL changes
  const { data, error, isLoading } = useService();

  const [loading, setLoading] = useState(false); // State for loader


  const [navigationState, setNavigationState] = useState(null); // Holds state for the clicked item

  useEffect(() => {
    // Reset navigation state when the URL changes
    // setNavigationState(null);
     setLoading(false); // Stop loader after navigation
  }, [location.pathname]);

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  // Process the data to filter and select random records
  const filteredData = data?.services
    ? shuffleArray(data.services.filter((service) => service.id !== moreWorkId)).slice(0, 2)
    : [];

  // const handleImageClick = (id, url, itemimage) => {
  //   setLoading(true);
  //    // Reset the image state immediately
  // setNavigationState({
  //   selectedImageId: null,
  //   selectedImage: null,
  // });
   

  //   // Process the URL for navigation
  //   url = url.split("/").filter(Boolean).pop();
  //   url = typeof url === "string" ? url : String(url);
  //   url = url ? url.replace(/[^a-zA-Z0-9\-]+/g, "-").replace(/\s+/g, "-") : "";

  //   const queryString = `?id=${id}&title=${encodeURIComponent(url)}`;
  //   const fullPath = `/service-details${queryString}`;

  //   // Navigate after animation completes
  //   setTimeout(() => {
  //     navigate(fullPath, {
  //       state: {
  //         selectedImageId: id,
  //         selectedImage: itemimage,
  //       },
  //     });
  //       window.location.reload();
  //       window.scrollTo(0, 0);
  //       setLoading(false);
  //   }, 1500);
  // };


  const handleImageClick = (id, url, itemimage) => {
  setLoading(true);

  // Reset the image state
  setNavigationState({
    selectedImageId: null,
    selectedImage: null,
  });

  // Process the URL for navigation
  const processedUrl = url
    .split("/")
    .filter(Boolean)
    .pop()
    .replace(/[^a-zA-Z0-9\-]+/g, "-")
    .replace(/\s+/g, "-");

  const queryString = `?id=${id}&title=${encodeURIComponent(processedUrl)}`;
  const fullPath = `/service-details${queryString}`;

  // Perform a smooth scroll to the top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Add a slight delay for animations or loading visuals
  setTimeout(() => {
    // Navigate to the new route
    navigate(fullPath, {
      state: {
        selectedImageId: id,
        selectedImage: itemimage,
        // isSamePageNavigation: true
      },
    });
    setLoading(false);
  }, 100); // Adjust delay as needed
};





  return (
    <div className="container-fluid">

     {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      <SplashDetailsContainer />

      <div className="row pt-200">
        <div className="col-12">
          <div className="head_head">
            <h2
              className="mb-0"
              style={{
                color: "#000",
                fontSize: "100px",
                fontStyle: "normal",
                fontWeight: 900,
                lineHeight: "1.2",
                marginBottom: "30px",
                paddingTop: "100px",
                fontFamily: "'elzablack', sans-serif",
              }}
            >
              More Services
            </h2>
          </div>
        </div>
      </div>

      <section className="gallery-work-details-area gallery-bg-white">
        <div className="row">
          <div className="col-12">
            <div className="first_row_gallery row">
              <div className="col-md-6 left_module">
                {filteredData.length > 0 ? (
                  filteredData.slice(0, 1).map((item, index) => (
                    <motion.div
                      key={item.id}
                      layoutId={`image-${item.id}`} // Shared layout id for image animation
                      onClick={() => handleImageClick(item.id, item.permalink, item.featured_image)}
                      style={{ cursor: "pointer" }}
                    >
                      <a href="#!">
                        <div key={index} className="glry_hm" data-aos="fade-up">
                          <div className="glry_hm_image">
                            <img
                              className="module-gallery-image"
                              src={item.featured_image} // Correct property for the image
                              alt={item.title} // Correct property for the title
                            />
                          </div>
                          <h5>{item.title}</h5>
                        </div>
                      </a>
                    </motion.div>
                  ))
                ) : (
                  <p>No gallery items available</p>
                )}
              </div>

              <div className="col-md-5 rt_module">
                {filteredData.length > 0 ? (
                  filteredData.slice(1).map((item, index) => (
                    <motion.div
                      key={item.id}
                      layoutId={`image-${item.id}`} // Shared layout id for image animation
                      onClick={() => handleImageClick(item.id, item.permalink, item.featured_image)}
                      style={{ cursor: "pointer" }}
                    >
                      <a href="#!">
                        <div key={index} className="glry_hm" data-aos="fade-up">
                          <div className="glry_hm_image">
                            <img
                              className="module-gallery-image"
                              src={item.featured_image} // Correct property for the image
                              alt={item.title} // Correct property for the title
                            />
                          </div>
                          <h5>{item.title}</h5>
                        </div>
                      </a>
                    </motion.div>
                  ))
                ) : (
                  <p>No gallery items available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreWork;
