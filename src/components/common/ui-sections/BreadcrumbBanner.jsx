import React from "react";
import "../../../styles/breadcrumb.css";
// import klineLogo from "../../../assets/images/kline-logo.png";

const BreadcrumbBanner = ({ services, logo }) => {
  return (
    <section className="breadcrumb_banner">
      <div className="container-fluid bg-gray-breadcrumb">
        <img src={logo} alt="klineLogo" />
        <ul className="list-group list-group-horizontal">
          {services.length > 0 &&
            services.map((item) => (
              <li className="list-group-item ">
                {item}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default BreadcrumbBanner;
