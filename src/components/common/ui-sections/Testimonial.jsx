import React from "react";
import "../../../styles/testimonial-style.css";
import Typewriter from "../animations/Typewriter";
import PixelQoutes from "../../../assets/images/pixel-quotes.png";

const Testimonial = ({ testimonials }) => {
  return (
    <section className="testimonial_area private_area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {testimonials.map((testimonial, index) => (
              <div className="testi_box">
                <img className="quote_icon" src={PixelQoutes} alt="quoteIcon" />

                <div className="head_qoute">
                  <Typewriter
                    textArray={[testimonial.item_content]}
                    period={2000}
                    speed={100}
                    customClass="typewrite"
                  />
                </div>
                <h6>{testimonial.item_title}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
