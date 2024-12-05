import React from "react";
import "../../../styles/gallery.css";
import EllipseMore from "../../../assets/images/ellipse-more.svg";
// import MoreWork1 from "../../../assets/images/more-work1.webp";
// import MoreWork2 from "../../../assets/images/more-work2.webp";
import SplashDetailsContainer from "../animations/splashAnime/SplashDetailsContainer";

const MoreWork = ({ moreWorks }) => {
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
              >
                <div className="more_btn">
                  <a href="javascript:void(0)">
                    <img src={EllipseMore} alt="ellipseIcon" />
                    <h4>More</h4>
                  </a>
                </div>
                <a className="gallery-item" href="javascript:void(0)">
                  <div className="item_image">
                    <img
                      src={work.item_thumbnail}
                      className="img-fluid w-100 d-block"
                      alt={work.item_url}
                    />
                  </div>
                  <div className="desc_pic">
                  <div className="wdth_ttle">
                    <h2 dangerouslySetInnerHTML={{ __html: work.item_title }} />
                   </div>
                    <ul className="list-group list-group-horizontal">
                      {work.item_services?.length > 0 &&
                        work.item_services.map((item) => (
                          <li className="list-group-item list-group-item-dark">
                            {item}
                          </li>
                        ))}
                      {/* <li>{work.item_content}</li> */}
                    </ul>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreWork;
