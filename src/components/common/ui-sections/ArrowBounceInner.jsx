// ArrowBounce.jsx
import React from "react";
import ScrollButton from "./buttons/ScrollButton";
import dowarrow from "../../../assets/images/dowarrow.svg"; // Adjust the import based on your file structure
import styles from "../../../styles/arrow-bounce-inner.module.css";

const ArrowBounceInner = ({ id = "work-section" }) => {
  return (
    <section
      className={`d-flex justify-content-center ${styles.arrow_down_area}`}
    >
      <div className="container-fluid">
        <div className={styles.root}>
          <ScrollButton
            targetId={id}
            imageSrc={dowarrow}
            altText="down arrow"
            className={`${styles.bounce} work_btn_arrow`}
          />
        </div>
      </div>
    </section>
  );
};

export default ArrowBounceInner;
