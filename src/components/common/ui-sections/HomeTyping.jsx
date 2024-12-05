import React from "react";
import Typewriter from "../animations/Typewriter"; // Assuming Typewriter is a custom component or imported from a library
import dowarrow from "../../../assets/images/dowarrow.svg";
import "../../../styles/home-typing-style.css";
import "../../../styles/arrow-bounce.css";

const HomeTypingArea = ({ typingText }) => {
  const scrollToWorkSection = () => {
    const workSection = document.querySelector("#work-section");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="home_typing_area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="home_typearea">
                <Typewriter
                  textArray={[typingText]}
                  customClass="text_gradient"
                  period={2000}
                  speed={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="arrow_down_area d-flex justify-content-center pt-0">
        <div className="container-fluid">
          <div className="root">
            <button
              className="bounce work_btn_arrow"
              onClick={scrollToWorkSection}
            >
              <img src={dowarrow} alt="down arrow" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTypingArea;
