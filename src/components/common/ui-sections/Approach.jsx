import React from "react";
import Typewriter from "../animations/Typewriter";
import "../../../styles/approach-style.css";
import CardContent from "../ui-snippets/CardContent";

const Approach = ({ challenge, approach }) => {
  const approachData = [challenge, approach];
  return (
    <div className="appraoch_area">
      <div className="container-fluid">
        <div className="row approach-gap">
          {approachData.map((section, index) => (
            <CardContent
              key={index}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
