import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/gallery.css";
import EllipseMore from "../../../assets/images/ellipse-more.svg";
import SplashDetailsContainer from "../animations/splashAnime/SplashDetailsContainer";

const MoreWork = ({ moreWorks }) => {
  const navigate = useNavigate();
  

  const handleImageClick = (imageId, selectedImage) => {
    // Delay the scroll to ensure layout rendering is complete
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100); // Adjust this timeout as needed based on performance

    // console.log("=============");
    // console.log(selectedImage);
    // console.log("=================");

    // Navigate with title and selected image details
    const title = selectedImage?.item_url
      ? selectedImage.item_url.replace(/\s+/g, "-")
      : "default-title"; // Fallback title if not defined
    navigate(`/content?id=${imageId}&title=${title}`, {
      state: { selectedImageId: imageId, selectedImage: selectedImage.item_thumbnail },
    });
  };

  if (!moreWorks || moreWorks.length === 0) {
    // Show a loader if moreWorks is not loaded
    return <div className="loading-indicator">Loading...</div>;
  }

  return (
    <section className="featured_work_area more_work_area" id="work-section">
      <SplashDetailsContainer />
      <div className="container-fluid">
        <div className="row pt-200">
          <div className="col-12">
            <div className="head_head">
              <h2 className="mb-0">More work</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="photo-gallery">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 gallery-grid">
            {moreWorks.map((work, index) => (
              <div
                className="col box-gallery"
                data-aos="fade-up"
                data-aos-duration="3000"
                key={index}
                onClick={() => handleImageClick(work.item_id, work)}
              >
                <div className="more_btn">
                  {/* eslint-disable jsx-a11y/anchor-is-valid */}
                  <a href="javascript:void(0)">
                    <img src={EllipseMore} alt="ellipseIcon" />
                    <h4>More</h4>
                  </a>
                  {/* eslint-enable jsx-a11y/anchor-is-valid */}
                </div>

                {/* Gallery Item */}
                <div className="item_image">
                  <img
                    src={work.item_thumbnail}
                    className="img-fluid w-100 d-block"
                    alt={work.item_title}
                  />
                </div>

                <div className="desc_pic">
                  <div className="wdth_ttle">
                    <h2 dangerouslySetInnerHTML={{ __html: work.item_title }} />
                  </div>
                  <ul className="list-group list-group-horizontal">
                    {work.item_services?.length > 0 &&
                      work.item_services.map((item, idx) => (
                        <li className="list-group-item list-group-item-dark" key={idx}>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreWork;
