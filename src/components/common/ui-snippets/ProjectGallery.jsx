import React from "react";

const ProjectGallery = ({ projects }) => {
    return (
      <div className="project_details">
        {projects.map((project, index) => (
          <div className={`pro-details-row ${project.active ? 'active' : ''}`} key={index}>
            <a href="#">
              <div className="container-fluid row py-5 align-items-center">
                <div className="row">
                  <div className="col-lg-11 col-sm-11 proIconArea">
                    <img className="pro_icon" src={project.icon} alt={project.name} />
                    <h4 className="text-start font-bld">{project.name}</h4>
                  </div>
                  <div className="col-lg-1 col-sm-1 right_arrow_section">
                    <img src="images/arrow-right.svg" alt="Right arrow icon" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };
  