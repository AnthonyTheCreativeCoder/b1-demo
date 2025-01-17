import React, { useState, useEffect } from "react";
import ArrowRight from "../../../assets/images/arrow-right.svg";
import { useNavigate } from "react-router-dom";
const ProjectDetails = ({ projects }) => {

  // console.log(projects);
  const [visibleProjects, setVisibleProjects] = useState([]); // Projects to display
  const [page, setPage] = useState(1); // Current page for infinite scroll
  const [infiniteScrollActive, setInfiniteScrollActive] = useState(false); // Controls infinite scroll activation
  const itemsPerPage = 2; // Number of items per page

  // Initial load of projects
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setVisibleProjects(projects.slice(0, itemsPerPage));
  }, [projects]);

  // Scroll detection
  const handleScroll = () => {
    if (!infiniteScrollActive) return;

    const projectContainer = document.querySelector(".project_details");
    if (projectContainer) {
      const { bottom } = projectContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Load more when component bottom is near the viewport
      if (bottom <= windowHeight + 50) {
        loadMoreProjects();
      }
    }
  };

  // Load more projects
  const loadMoreProjects = () => {
    const startIndex = page * itemsPerPage; // Calculate start index
    const endIndex = startIndex + itemsPerPage; // Calculate end index

    // Append the next batch if there's data left
    if (startIndex < projects.length) {
      setVisibleProjects((prev) => [
        ...prev,
        ...projects.slice(startIndex, endIndex),
      ]);
      setPage((prevPage) => prevPage + 1); // Increment page for the next batch
    }
  };

  // Handle "View More" button click
  const handleViewMoreClick = () => {
    setInfiniteScrollActive(true); // Activate infinite scroll
    loadMoreProjects(); // Load the next batch
  };

  // Attach scroll event listener for infinite scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [infiniteScrollActive, page]);

    const navigate = useNavigate();
    const staticProjectFunc = (project) => {

      // console.log(project);
      

    const projectURL = project.item_url;
    const serContents = project.item_services;

    const projectUrlParts = projectURL.split('/');
    const urlLastIndex = projectUrlParts[projectUrlParts.length - 2]; // Get the second last item
    // Replace spaces with dashes for the entire URL
    const updatedProjectUrl = urlLastIndex.replace(/\s+/g, "-");

    const queryString = `?id=${project.item_id}&title=${encodeURIComponent(updatedProjectUrl)}`;
    setTimeout(() => {
    navigate(`/content${queryString}`, { state: { selectedImageId: project.item_id ,selectedImage:project.item_thumbnail, postVideo:project.post_video, itemContents: serContents.join(',')} });
  }, 100);

  // setTimeout(() => {
  //   navigate(`/post-details/project/${updatedProjectUrl}/`, { state: { itemTitle: project.item_title, itemURL:project.item_url,  itemID:project.item_id, itemContent:project.item_content } });
  // }, 100); // Wait for the state vale set properly

 

  };

  return (
    <div className="project_details workPageProjects">
      {visibleProjects.map((project, index) => (
        <div
          className={index === 0 ? "pro-details-row active cursr_pointer" : "pro-details-row cursr_pointer"}
          key={index}
          onClick={() => staticProjectFunc(project)}>
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a href="javascript:void(0)">
            <div className="container-fluid row py-5 align-items-center">
              <div className="row">
                <div className="col-lg-5 col-sm-5 pro_leftContent">
                  <h4 className="text-start font-bld">{project?.item_title}</h4>
                </div>
                <div className="col-lg-5 col-sm-6">
                        <h4>
                        {project?.item_content?.length > 30
                        ? `${project.item_content.substring(0, 30)}...`
                        : project?.item_content}
                        </h4>

                </div>
                <div className="col-lg-1 col-sm-1 right_arrow_section">
                  <img src={ArrowRight} alt="RightArrowIcon" />
                </div>
              </div>
            </div>
          </a>
          {/* eslint-enable jsx-a11y/anchor-is-valid */}
        </div>
      ))}
      {!infiniteScrollActive && (
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12">
              <button
                onClick={handleViewMoreClick}
                className="btn_cmn"
                style={{ cursor: "pointer" }}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;


