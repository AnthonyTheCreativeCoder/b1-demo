// ArrowBounce.jsx
import React from "react";
import ScrollButton from "./buttons/ScrollButton";
import dowarrow from "../../../assets/images/dowarrow.svg"; // Adjust the import based on your file structure
import "../../../styles/arrow-bounce.css"; //

const ArrowBounce = ({ id = "work-section" }) => {
  return (
    <section className="arrow_down_area d-flex justify-content-center">
      <div className="container-fluid">
        <div className="root">
          <ScrollButton
            targetId={id}
            imageSrc={dowarrow}
            altText="down arrow"
            className="bounce work_btn_arrow"
          />
          {/* <ScrollButton 
            targetId="overview-section" 
            imageSrc={`/B1inter/wp-content/themes/sage/public/images/dowarrow.3c3fc0.svg`} 
            altText="down arrow" 
            className="bounce work_details_btn" 
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ArrowBounce;
