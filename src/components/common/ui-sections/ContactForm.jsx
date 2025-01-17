
import React, { useState } from "react";
import "../../../styles/WorkHome.css";
import "../../../styles/overview.css";
import "../../../styles/breadcrumb.css";
import "../../../styles/contactForm.css";
import "../../../styles/responsive.css";
import { MaskWhite } from "../../../assets";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    query: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    query: "",
  });

  const [loading, setLoading] = useState(false); // Track loading state
  const [successVisible, setSuccessVisible] = useState(false); // Track success message visibility

  const validateForm = () => {
    setLoading(true);
    const newErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
      isValid = false;
       setLoading(false);
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
      isValid = false;
      setLoading(false);
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
      setLoading(false);
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
      setLoading(false);
    }

    if (!formData.query) {
      newErrors.query = "This field is required";
      isValid = false;
      setLoading(false);
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        query: "",
      });

      setSuccessVisible(true);

      setTimeout(() => {
        setSuccessVisible(false);
      }, 2000);
    }, 2000);
  };

  return (
    <section className="home-page-work-wrapper" id="contact-section">
      <div className="container-fluid">
        <div className="col-12 smll_bx_wht">
          <img src={MaskWhite} alt="mask icon" />
        </div>
        <div className="pagination-text row justify-content-between align-items-center py-5"></div>

        <div className="contact_us_green w-auto py-4 text-secondary">
          <div className="responsive-container-block big-container">
            <div className="responsive-container-block container">
              <div
                className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
                id="i69b-2"
              >
                <form className="form-box" onSubmit={handleSubmit}>
                  <div className="container-block form-wrapper">
                    <div className="head-text-box">
                      <p className="text-blk contactus-head">Contact us</p>
                      <p className="text-blk contactus-subhead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim
                      </p>
                    </div>
                    <div className="responsive-container-block">

                    {successVisible && (
                       <div className="responsive-cell-block wk-ipadp-12 wk-tab-12 wk-mobile-12 wk-desk-12">
                      <p className="success-message">
                        Form submitted successfully!
                      </p>
                    </div>
                    )}
                    
                      <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6">
                        <p className="text-blk input-title">FIRST NAME</p>
                        <input
                          className="input"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                        {errors.firstName && (
                          <p className="error-message">{errors.firstName}</p>
                        )}
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">LAST NAME</p>
                        <input
                          className="input"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                        {errors.lastName && (
                          <p className="error-message">{errors.lastName}</p>
                        )}
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">EMAIL</p>
                        <input
                          className="input"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        {errors.email && (
                          <p className="error-message">{errors.email}</p>
                        )}
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">PHONE NUMBER</p>
                        <input
                          className="input"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                        />
                        {errors.phoneNumber && (
                          <p className="error-message">{errors.phoneNumber}</p>
                        )}
                      </div>
                      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
                        <p className="text-blk input-title">
                          WHAT DO YOU HAVE IN MIND
                        </p>
                        <textarea
                          className="textinput"
                          name="query"
                          placeholder="Please enter query..."
                          value={formData.query}
                          onChange={handleInputChange}
                        ></textarea>
                        {errors.query && (
                          <p className="error-message">{errors.query}</p>
                        )}
                      </div>
                    </div>
                   <div className="btn-wrapper">
                      <button className="submit-btn" type="submit" disabled={loading}>
                        {loading ? <div className="loader"></div> : "Send"}
                      </button>
                    </div>
                    
                  </div>
                </form>
              </div>
              <div
                className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10"
                id="ifgi"
              >
                <div className="container-box">
                  <div className="text-content">
                    <p className="text-blk contactus-head">Contact us</p>
                    <p className="text-blk contactus-subhead">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim
                    </p>
                  </div>
                  <div className="workik-contact-bigbox">
                    <div className="workik-contact-box">
                      <div className="phone text-box">
                        <img
                          alt="contact icon"
                          className="contact-svg"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
                        />
                        <p className="contact-text">+1258 3258 5679</p>
                      </div>
                      <div className="address text-box">
                        <img
                          alt="contact icon"
                          className="contact-svg"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
                        />
                        <p className="contact-text">hello@workik.com</p>
                      </div>
                      <div className="mail text-box">
                        <img
                          alt="contact icon"
                          className="contact-svg"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"
                        />
                        <p className="contact-text">
                          102 street, y cross 485656
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
