import React, { useState } from "react";
import "../../../../styles/WorkHome.css";
import "../../../../styles/overview.css";
import "../../../../styles/breadcrumb.css";
import "./contactForm.css";
import "./responsive.css";
import { MaskWhite } from "../../../../assets";
import useContactForm from "../../hooks/react-query/useContactForm";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    query: "",
  });

  const { loading, error, success, submitForm } = useContactForm("contact-form-endpoint");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm(formData); // Call the hook's submitForm function
    if (success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        query: "",
      });
    }
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <div className="container-block form-wrapper">
        <div className="head-text-box">
          <p className="text-blk contactus-head">Contact us</p>
          <p className="text-blk contactus-subhead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="responsive-container-block">
          <div className="responsive-cell-block wk-ipadp-6">
            <p className="text-blk input-title">FIRST NAME</p>
            <input
              className="input"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="responsive-cell-block wk-ipadp-6">
            <p className="text-blk input-title">LAST NAME</p>
            <input
              className="input"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="responsive-cell-block wk-ipadp-6">
            <p className="text-blk input-title">EMAIL</p>
            <input
              className="input"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="responsive-cell-block wk-ipadp-6">
            <p className="text-blk input-title">PHONE NUMBER</p>
            <input
              className="input"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="responsive-cell-block wk-ipadp-12">
            <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND</p>
            <textarea
              className="textinput"
              name="query"
              placeholder="Please enter query..."
              value={formData.query}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div className="btn-wrapper">
          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
        {success && <p className="success-message">Form submitted successfully!</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </form>
  );
}

export default ContactForm;

