import React from "react";
import ModuleBg1 from "../../../assets/images/module-bg1.webp";
import ModuleBg2 from "../../../assets/images/module-bg2.webp";
import ModuleBg3 from "../../../assets/images/module-bg3.webp";
import ModuleBg4 from "../../../assets/images/module-bg4.webp";
import ModuleBg5 from "../../../assets/images/module-bg5.webp";
import ModuleBg6 from "../../../assets/images/module-bg6.webp";
import ModuleBg7 from "../../../assets/images/module-bg7.webp";
import ModuleBg8 from "../../../assets/images/module-bg8.webp";

const GalleryWorkDetailsWhite = ({ galleryImages }) => {
  return (
    <section className="gallery-work-details-area gallery-bg-white">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="first_row_gallery row">
              <div className="col-md-6 left_module">
                <img
                  className="module-gallery-image"
                  data-aos="fade-up"
                  src={ModuleBg1}
                  width="232"
                  height="290"
                  alt="Module background 1"
                />
              </div>
              <div className="col-md-5 rt_module">
                <img
                  className="module-gallery-image"
                  data-aos="fade-up"
                  src={ModuleBg2}
                  width="232"
                  height="290"
                  alt="Module gallery  1"
                />
                <img
                  className="module-gallery-image"
                  data-aos="fade-up"
                  src={ModuleBg3}
                  width="232"
                  height="290"
                  alt="Module gallery 2"
                />
              </div>
            </div>
            <div className="middle_row_gallery row">
              <div className="col-10 m-auto">
                <img
                  className="module-gallery-image"
                  data-aos="fade-up"
                  src={ModuleBg4}
                  width="232"
                  height="290"
                  alt="Module gallery 3"
                />
              </div>
            </div>
            <div className="third_row_gallery row">
              <div className="col-md-5 left_module">
                <img
                  className="module-gallery-image"
                  data-aos="fade-up"
                  src={ModuleBg5}
                  width="232"
                  height="290"
                  alt="Module gallery 4"
                />
                <img
                  className="module-gallery-image"
                  data-aos="fade-up"
                  src={ModuleBg7}
                  width="232"
                  height="290"
                  alt="Module gallery 5"
                />
              </div>
              <div className="col-md-6 rt_module">
                <img
                  className="module-gallery-image"
                  data-aos="fade-up"
                  src={ModuleBg6}
                  width="232"
                  height="290"
                  alt="Module gallery 6"
                />
                <img
                  className="module-gallery-image"
                  data-aos="fade-up"
                  src={ModuleBg8}
                  width="232"
                  height="290"
                  alt="Module gallery 7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryWorkDetailsWhite;
