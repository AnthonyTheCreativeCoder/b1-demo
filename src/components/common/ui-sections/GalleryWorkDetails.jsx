import React from "react";
import "../../../styles/gallery-work-details.css";

const GalleryWorkDetails = ({ workDetailsImage }) => {
  return (
    <section className="gallery-work-details-area pt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 left_main_gall">
            {workDetailsImage
              .slice(workDetailsImage?.length / 2)
              .map((image, index) => (
                <img
                  className="w-full main-full-gallery"
                  data-aos="fade-up"
                  src={image}
                  width="232"
                  height="290"
                  alt={`gallery-${index}`}
                  key={`gallery-${index}`}
                />
              ))}
          </div>
          <div className="col-6 rt_main_gall">
            {workDetailsImage
              .slice(0, workDetailsImage?.length / 2)
              .map((image, index) => (
                <img
                  className="w-full main-full-gallery"
                  data-aos="fade-up"
                  src={image}
                  width="232"
                  height="290"
                  alt={`gallery-${index}`}
                  key={`gallery-${index}`}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryWorkDetails;
