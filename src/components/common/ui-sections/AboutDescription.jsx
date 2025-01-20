import React from 'react';
import useAboutDetails from "../../../hooks/react-query/useAboutDetails";
import "../../../styles/AboutPage.css";

export default function AboutDescription() {
  const { data, error, isLoading } = useAboutDetails();
  const subheading = data?.about_data?.sub_heading || '';
  

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error loading data. Please try again later.</p>
      </div>
    );
  }

  // Extract data only after loading is complete
  const desc = data?.about_data?.content || 'Loream Ipsum';
  // const short_description = data?.about_data?.short_desscription || 'Loream Ipsum';

  return (
    <div className="container-fluid pt_cntnr_tp" id="next-section">
      <h2>{subheading}</h2>
      <div dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}
