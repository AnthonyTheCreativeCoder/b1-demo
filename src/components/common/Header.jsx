import React, { useState, useEffect } from "react";
import "../../styles/Header.css";
import "../../styles/inner-header.css";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ header: { menu_items, logo }, err = null }) => {
  const location = useLocation();
  const [error, setError] = useState(err);
  const [toggleShow, setToggleShow] = useState(false);

  const handleToggleMenu = () => {
    setToggleShow(!toggleShow);
    console.log(toggleShow, "toggle");
  };

  useEffect(() => {
    setToggleShow(false);
  }, [location.pathname]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  // Check if the current path is work details page
  // console.log("test"+typeof(headerData.menu_items));

  const isWorkDetailsPage = location.pathname.startsWith("/works/");
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
                // data-bs-toggle="collapse"
                // data-bs-target="#mainNavigation"
                // aria-controls="mainNavigation"
                // aria-expanded="false"
                // aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end desktop-header">
                <ul className="d-flex navbar-nav">
                  {menu_items?.length > 0 &&
                    menu_items.map(({ title, url }) => (
                      <li className="border-animation nav-item menu-item">
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
                  <li className="border-animation nav-item menu-item">
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
