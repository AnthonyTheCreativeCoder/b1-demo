import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Typewriter from "../animations/Typewriter";
import "../../../styles/gallery.css";
import MaskWhite from "../../../assets/images/mask-white.svg";
import EllipseMore from "../../../assets/images/ellipse-more.svg";
import "../../../styles/other-work.css";
import { gsap } from "gsap";

const FeaturedWork = ({
  features: { pagination, title, short_title, description, works },
}) => {
  const navigate = useNavigate();

  const navigateWithAnimation = (work) => {
    const imageElement = document.getElementById(`image-${work.item_id}`);
    if (!imageElement) {
      console.warn(`Image element not found for ID: image-${work.item_id}`);
      return;
    }

    const rect = imageElement.getBoundingClientRect();

    const clone = imageElement.cloneNode(true);
    Object.assign(clone.style, {
      position: "fixed",
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      zIndex: 1000,
      pointerEvents: "none",
    });

    document.body.appendChild(clone);

    gsap.to(clone, {
      duration: 1,
      width: "100vw",
      height: "100vh",
      top: 0,
      left: 0,
      ease: "power3.inOut",
      onComplete: () => {
        navigate(`/works/${work.item_url.split("/").filter(Boolean).pop()}`, {
          state: {
            imageSrc: work.item_thumbnail,
            rect,
          },
        });

        requestAnimationFrame(() => {
          clone.remove();
        });
      },
    });
  };

  return (
    <section className="featured_work_area" id="work-section">
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
            {works.map((work) => (
              <div className="col box-gallery" data-aos="fade-up" key={work.id}>
                <div className="more_btn">
                  <Link to={`/works/${work.item_url.split("/").filter(Boolean).pop()}`}>
                    <img src={EllipseMore} alt="ellipseIcon" />
                    <h4>More</h4>
                  </Link>
                </div>
                <a className="gallery-item" href="javascript:void(0)" onClick={() => navigateWithAnimation(work)}>
                  <div className="item_image">
                    <img
                      src={work.item_thumbnail}
                      id={`image-${work.item_id}`}
                      className="img-fluid w-100 d-block"
                      alt="GalleryImage"
                    />
                  </div>
                  <div className="desc_pic">
                    <div className="wdth_ttle">
                      <h2
                        dangerouslySetInnerHTML={{ __html: work.item_title }}
                      />
                    </div>
                    <ul className="list-group list-group-horizontal">
                      {work.item_services.map((item, idx) => (
                        <li className="list-group-item list-group-item-dark" key={idx}>
                          {item}
                        </li>
                      ))}
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

export default FeaturedWork;
