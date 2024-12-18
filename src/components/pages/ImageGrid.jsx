// src/components/ImageGrid.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Sample images
const images = [
  { id: 1, src: "https://via.placeholder.com/300" },
  { id: 2, src: "https://via.placeholder.com/300" },
];

export default function ImageGrid() {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    console.log("id is"+id);
    // Navigating to the content page with selected image ID
    navigate("/content", { state: { selectedImageId: id } });
  };

  return (
    <div>
    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

    <div className="container-fluid">
        <div className="col-12 smll_bx_wht">
          <img src="" alt="maskImage" />
        </div>

        <div className="row justify-content-between align-items-center py-5">
          <div className="col-6">
            
          </div>
          <div className="col-6">
            <h5></h5>
          </div>
        </div>

        <div className="row pt-100">
          <div className="col-12">
            <div className="head_head">
             
            </div>
            <div className="featured_intro fadeinBottom">
              <div className="ftr_intro_animie">
               </div>
            </div>
          </div>
        </div>
      </div>
    <div
      style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >

      {images.map((image) => (
        <motion.div
          key={image.id}
          layoutId={`image-${image.id}`} // Shared layout id for image animation
          onClick={() => handleImageClick(image.id)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={image.src}
            alt="Thumbnail"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
        </motion.div>
      ))}
    </div>
    </div>
  );
}