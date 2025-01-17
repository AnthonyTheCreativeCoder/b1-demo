import React, { useEffect } from "react";
import "../../styles/Footer.css";
import Typewriter from "./animations/Typewriter";
import { Link, useLocation } from "react-router-dom";
import useHome from "../../hooks/react-query/useHome";

const Footer = ({ footer, err = null }) => {
  const { data } = useHome();
  const homedata = data;
  // const [error, setError] = useState(err);
  const footerLinks = [
    { title: homedata?.title1, url: homedata?.link_1 },
    { title: homedata?.title2, url: homedata?.link_2 },
    { title: homedata?.title3, url: homedata?.link_3 },
  ];
  const location = useLocation();
  const isContactPage = location.pathname.startsWith("/contact");



  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll(".border-animation").forEach((item) => {
        if (!item.querySelector(".border-animation-inner")) {
          const span = document.createElement("span");
          span.className = "border-animation-inner";
          item.insertBefore(span, item.firstChild);
        }
      });

      document.querySelectorAll(".button_social").forEach((item) => {
        if (!item.nextElementSibling || !item.nextElementSibling.classList.contains("button-bg")) {
          const span = document.createElement("span");
          span.className = "button-bg";
          item.insertAdjacentElement("afterend", span);
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [location.pathname]);


  return (
    <footer id="footer-section">
      <section id="contact-section-footer">
        {!isContactPage && (
          <div className="container-fluid border-animation brdr_pddng position-relative">
            <div className="row">
              <div className="col-12">
                <h6>Have a project in mind?</h6>
                <div className="lets_connct">
                  {/* <span className="typewrite text_gradient" data-period="2000" data-type='["Let&rsquo;s Connect"]' style={{ '--speed': '200' }}></span> */}
                  <Typewriter
                    textArray={["Let's Connect"]}
                    period={2000}
                    speed={200}
                    customClass="text_gradient"
                  />
                </div>

                <Link to={"/contact"} className="white_btn mt-5">
                  Send us a message
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="container-fluid footer_social">
          <div className="row">
            <div className="col-12">
              <nav>
                {footer?.length > 0 && (
                  <ul className="d-flex m-0 p-0 justify-content-center">
                    {footerLinks.map(({ title, url }, index) => (
                      <li key={index} className="button-wrapper">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="button_social"
                          href={url} // Dynamic hyperlink
                        >
                          {title} {/* Static or unchanged */}
                        </a>
                        <span className="button-bg"></span>
                        <span className="button-bg"></span>
                      </li>
                    ))}
                  </ul>
                )}
              </nav>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
