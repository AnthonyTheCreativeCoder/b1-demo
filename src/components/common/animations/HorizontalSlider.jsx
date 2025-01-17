import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper/bundle"; // Use bundle for the correct Swiper version
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "../animations/Typewriter";
import "../../../styles/approach-style.css";
import "swiper/swiper-bundle.css";
import "../../../styles/horizontal-scroll.css";
import WhiteSmallTiles from "../../../assets/images/white-small-tiles.png";

const HorizontalSlider = ({
  mobileSection: { title, description, mobileGallery },
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const swiperWrapperRef = useRef(null);
  const sliderGalleryRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const initSwiper = () => {
      new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        on: {
          init: updateSwiperWidth,
          resize: updateSwiperWidth,
        },
      });
    };

    const updateSwiperWidth = () => {
      const swiperWrapper = swiperWrapperRef.current;
      if (swiperWrapper) {
        const slides = document.querySelectorAll(".swiper-slide");
        let totalWidth = 0;
        slides.forEach((slide) => {
          totalWidth += slide.offsetWidth;
        });
        swiperWrapper.style.width = `${totalWidth}px`;
        ScrollTrigger.refresh(); // Refresh ScrollTrigger
      }
    };

    const animateSwiper = () => {
      gsap.to(swiperWrapperRef.current, {
        x: () => -(swiperWrapperRef.current.offsetWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          id: "horizontalSliderScrollTrigger",
          trigger: sliderGalleryRef.current,
          start: "top top",
          end: () => `+=${swiperWrapperRef.current.offsetWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
      });
    };

    if (imagesLoaded) {
      initSwiper();
      animateSwiper();
      ScrollTrigger.refresh();
    }

    return () => {
      const myTrigger = ScrollTrigger.getById("horizontalSliderScrollTrigger");
      if (myTrigger) {
        myTrigger.kill();
      }
    };
  }, [imagesLoaded]); // Dependency array includes imagesLoaded

  const handleImagesLoad = () => {
    setImagesLoaded(true);
  };

  // Ensure all images are loaded before starting the animation
  useEffect(() => {
    const images = [...mobileGallery];
    let loadedCount = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === images.length) {
          handleImagesLoad();
        }
      };
    });
  }, [mobileGallery]); // Dependency array includes mobileGallery

  return (
    <>
      <div className="spacer-role"></div>
      <section className="slider_horizontal_area">
        <div className="slider_gallery" ref={sliderGalleryRef}>
          <div className="swiper-container">
            <div className="prev_next_area">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
            <div className="appraoch_area py-4 slider_upper_area">
              <div className="container-fluid">
                <div className="row approach-gap">
                  <div className="col-sm-6 col-lg-6 challange_box">
                    <div
                      className="head_challange"
                      data-aos-delay="100"
                      data-aos="fade-up"
                    >
                      <img src={WhiteSmallTiles} alt="whiteBoxTiles" />
                      <div className="total_head_challange">
                        <Typewriter
                          textArray={[title]}
                          period={2000}
                          speed={200}
                          customClass="typewrite"
                        />
                      </div>
                    </div>
                    <div
                      className="para_challange"
                      data-aos-delay="300"
                      data-aos="fade-up"
                    >
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
            <div className="swiper-wrapper" ref={swiperWrapperRef}>
              <div className="swiper-slide placeholder"></div>
              {mobileGallery.map((image, index) => (
                <div className="swiper-slide" key={index}>
                  <img src={image} alt={`Slide ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HorizontalSlider;

