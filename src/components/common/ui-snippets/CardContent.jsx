import React from "react";
import Typewriter from "../animations/Typewriter";
import WhiteSmallTiles from "../../../assets/images/white-small-tiles.png";
import BlackSmallTiles from "../../../assets/images/black-small-tiles.png";

const CardContent = ({description,title,bgBlackImg}) => {
  return (
    <div className="col-sm-6 col-lg-6 challange_box">
      <div className="head_challange" data-aos-delay="100" data-aos="fade-up">
        <img src={bgBlackImg ? BlackSmallTiles : WhiteSmallTiles} alt="white small tiles" />
        <div className="total_head_challange">
          <Typewriter
            textArray={[title]}
            period={2000}
            speed={200}
            customClass="typewrite"
          />
        </div>
      </div>
      <div className="para_challange" data-aos-delay="300" data-aos="fade-up">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardContent;
