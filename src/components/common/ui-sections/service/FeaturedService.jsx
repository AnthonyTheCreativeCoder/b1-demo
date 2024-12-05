import React from "react";
import { EllipseMore, MaskWhite } from "../../../../assets";
import Typewriter from "../../animations/Typewriter";
import { Link } from "react-router-dom";
import "../../../../styles/gallery.css";

const FeaturedService = ({
  service: { pagination, title, short_title, description, works },
}) => {
  return (
    <>
      <section className="featured_work_area" id="service-section">
        <div className="container-fluid">
          <div className="col-12 smll_bx_wht">
            <img src={MaskWhite} alt="maskImage" />
          </div>

          <div className="row justify-content-between align-items-center py-5">
            <div className="col-6">
              <h6>{pagination}</h6>
            </div>

            <div className="col-6">
              <h5>{title}</h5>
            </div>
          </div>

          <div className="row pt-100">
            <div className="col-12">
              <div className="head_head">
                <h2 className="fadeinBottom">{short_title}</h2>
              </div>
              <div className="featured_intro fadeinBottom">
                <div className="ftr_intro_animie">
                  <Typewriter
                    textArray={[description]}
                    period={2000}
                    speed={100}
                    customClass="typewrite"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="photo-gallery">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 gallery-grid">
              {works.map((work, index) => (
                <div className="col box-gallery" data-aos="fade-up" key={index}>
                  <div className="more_btn">
                    <Link to="javascript:void(0)">
                      <img src={EllipseMore} alt="ellipseIcon" />
                      <h4>More</h4>
                    </Link>
                  </div>
                  <a className="gallery-item" href="javascript:void(0)">
                    <div className="item_image">
                      <img
                        src={work.item_thumbnail}
                        id={`image-${work.id}`}
                        className="img-fluid w-100 d-block"
                        alt="GalleryImage"
                        // onClick={() => handleClick(work)}
                      />
                    </div>
                    {/* </a> */}

                    <div className="desc_pic">
                    <div className="wdth_ttle">
                      <h2
                        dangerouslySetInnerHTML={{ __html: work.item_title }}
                      />
                      </div>
                      <h3>{work.item_content}</h3>
                    </div>
                  </a>
                  {/* </Link> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedService;
