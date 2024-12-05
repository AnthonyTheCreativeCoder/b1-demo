import React from "react";
import ArrowRight from "../../../assets/images/arrow-right.svg";

const ProjectDetails = ({ projects }) => {
  return (
    <div className="project_details workPageProjects">
  {projects.slice(0, 10).map((project, index) => (
    <div
      className={index === 0 ? "pro-details-row active" : "pro-details-row"}
      key={index}
    >
      <a href="javascript:void(0)">
        <div className="container-fluid row py-5 align-items-center">
          <div className="row">
            <div className="col-lg-5 col-sm-5 pro_leftContent">
              <h4 className="text-start font-bld">{project?.item_title}</h4>
            </div>
            <div className="col-lg-5 col-sm-6">
              <h4>{project?.item_content}</h4>
            </div>
            
            <div className="col-lg-1 col-sm-1 right_arrow_section">
              <img src={ArrowRight} alt="RightArrowIcon" />
            </div>
          </div>
        </div>
      </a>
    </div>
  ))}
  <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-12">
        <a href="javascript:void(0)" className="btn_cmn">
          View more
        </a>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProjectDetails;
