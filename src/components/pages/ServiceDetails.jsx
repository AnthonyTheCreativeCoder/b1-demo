import React from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../common/ui-sections/workHeroSection";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import FeaturedWork from "../common/ui-sections/FeaturedWork";
import useService from "../../hooks/react-query/useService";
import useWorkDetails from "../../hooks/react-query/useWorkDetails";
import { motion } from "framer-motion";

const ServiceDetails = () => {
  const { id } = useParams();
  const { data, error } = useWorkDetails({ id });
  const work = data;

  return (
     <motion.div
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      
     
       </motion.div>
   
  );
};

export default ServiceDetails;
