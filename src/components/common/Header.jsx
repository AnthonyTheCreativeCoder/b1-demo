import React, { useState, useEffect } from "react";
import "../../styles/Header.css";
import "../../styles/inner-header.css";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const Header = ({ header: { menu_items, logo }, err = null }) => {
  const location = useLocation();
  /* eslint-disable-next-line no-unused-vars */
  const [error, setError] = useState(err);
  const [toggleShow, setToggleShow] = useState(false);

  const handleToggleMenu = () => {
    setToggleShow(!toggleShow);
    // console.log(toggleShow, "toggle");
  };
/* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setToggleShow(false);
  }, [location.pathname]);

  if (error) {
    return <div>Error: {error}</div>;
  }
 

const isWorkDetailsPage =  location.pathname.startsWith("/content") || location.pathname.startsWith("/works") || location.pathname.startsWith("/service-details") || location.pathname.startsWith("/services");
  return (
    <header
      className={isWorkDetailsPage ? "work-details-header" : "other-header"}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-4 logoArea">
            <div className="logo">
              <Link to="/">
                {" "}
                <img src={logo} alt="logo" />{" "}
              </Link>
            </div>
          </div>
          <div className="col-md-8 mobile_header">
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                onClick={handleToggleMenu}
                
              >
                 <span  className={
              toggleShow ? "navbar-toggler-icon crossIcon" : "navbar-toggler-icon"
            }>
               <span></span>
            </span>
              </button>
              <div className="collapse navbar-collapse justify-content-end desktop-header">
                <ul className="d-flex navbar-nav">
                  {menu_items?.length > 0 &&
                    menu_items.map(({ title, url }) => (
                      <li className="border-animation nav-item menu-item" key={uuidv4()}>
                        {/* <Link to="/works">Works</Link> */}
                        <NavLink
                          to={url}
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          {title}
                        </NavLink>
                        <span className="border-animation-inner"></span>
                      </li>
                    ))}
                </ul>
              </div>
            </nav>
          </div>
          <div
            className={
              toggleShow ? "mobile-header block" : "mobile-header d-none"
            }
            id="mainNavigation"
          >
            <ul className="d-flex navbar-nav">
              {menu_items?.length > 0 &&
                menu_items.map(({ title, url }) => (
                  <li className="border-animation nav-item menu-item" key={uuidv4()}>
                    {/* <Link to="/works">Works</Link> */}
                    <NavLink
                      to={url}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {title}
                    </NavLink>
                    <span className="border-animation-inner"></span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
