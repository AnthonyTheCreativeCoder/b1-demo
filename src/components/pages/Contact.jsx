import React, { useState } from "react";
import HeroSection from "../common/ui-sections/workHeroSection";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import ContactForm from "../common/ui-sections/ContactForm";
import { heroImage } from "../../assets";
import useContactForm from "../../hooks/react-query/useContactForm";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    query: "",
  });

  // Call the useContactForm hook here to get the mutation result
  const { loading, error, success, submitForm } = useContactForm();

  // Handle form field change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the submitForm function from the hook to submit the form data
    await submitForm(formData);

    // Reset the form if submission is successful
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
    <>
      <div className="contactHero">
        <HeroSection
          banner={{
            image: heroImage,
            title: "Contact",
            description:
              "Give us a few details and we'll offer the best solution. Connect by phone, chat, email, and more...",
          }}
        />
      </div>
      <ArrowBounce id="contact-section" />
      <ContactForm />
     {/* <form className="form-box" onSubmit={handleSubmit}>
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
          {error && <p className="error-message">{error.message || error}</p>}
        </div>
      </form>*/}
    </>
  );
}

export default Contact;
