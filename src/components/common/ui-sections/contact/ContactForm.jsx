import React from "react";
import "../../../../styles/WorkHome.css";
import "../../../../styles/overview.css";
import "../../../../styles/breadcrumb.css";
import "./contactForm.css";
import "./responsive.css";
import { MaskWhite } from "../../../../assets";

function ContactForm() {
  return (
    <section className="home-page-work-wrapper" id="contact-section">
      <div className="container-fluid">
        <div className="col-12 smll_bx_wht">
          <img src={MaskWhite} alt="mask icon" />
        </div>
        <div className="pagination-text row justify-content-between align-items-center py-5">
          {/* <div className="col-6">
            <h6>{lorem.service.pagination.first}</h6>
          </div> */}
          {/* <div className="col-6">
            <h5>Contact us</h5>
          </div> */}
        </div>
        {/* <h2 className="home-para-content"> */}
        {/* <span
          className="typewrite"
          data-period="2000"
          data-type='["Our work sem sollicitudin lacus, ut interdum tellus elit sed risus."]'
          style={{ '--speed': '100' }}
        ></span> */}
        {/* <Typewriter
            textArray={[lorem.description]}
            period={2000}
            speed={100}
          /> */}
        {/* </h2> */}
        <div className="contact_us_green w-auto py-4 text-secondary">
          <div className="responsive-container-block big-container">
            <div className="responsive-container-block container">
              <div
                className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
                id="i69b-2"
              >
                <form className="form-box">
                  <div className="container-block form-wrapper">
                    <div className="head-text-box">
                      <p className="text-blk contactus-head">Contact us</p>
                      <p className="text-blk contactus-subhead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna al iqua. Ut enim
                      </p>
                    </div>
                    <div className="responsive-container-block">
                      <div
                        className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                        id="i10mt-6"
                      >
                        <p className="text-blk input-title">FIRST NAME</p>
                        <input
                          className="input"
                          id="ijowk-6"
                          name="FirstName"
                        />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">LAST NAME</p>
                        <input
                          className="input"
                          id="indfi-4"
                          name="Last Name"
                        />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">EMAIL</p>
                        <input className="input" id="ipmgh-6" name="Email" />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">PHONE NUMBER</p>
                        <input
                          className="input"
                          id="imgis-5"
                          name="PhoneNumber"
                        />
                      </div>
                      <div
                        className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                        id="i634i-6"
                      >
                        <p className="text-blk input-title">
                          WHAT DO YOU HAVE IN MIND
                        </p>
                        <textarea
                          className="textinput"
                          id="i5vyy-6"
                          placeholder="Please enter query..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="btn-wrapper">
                      <button className="submit-btn" type="submit">
                        Send
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
                      al iqua. Ut enim
                    </p>
                  </div>
                  <div className="workik-contact-bigbox">
                    <div className="workik-contact-box">
                      <div className="phone text-box">
                        <img alt="contact icon"
                          className="contact-svg"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
                        />
                        <p className="contact-text">+1258 3258 5679</p>
                      </div>
                      <div className="address text-box">
                        <img alt="contact icon"
                          className="contact-svg"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
                        />
                        <p className="contact-text">hello@workik.com</p>
                      </div>
                      <div className="mail text-box">
                        <img alt="contact icon"
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
        {/* <div className="row border border-1 rounded p-4 w-100">
          <div className="col">
            <form>
              <div className="mx-auto p-2 card bg-black text-primary-emphasis">
                <div className="row g-3 card-body">
                  <div className="row g-3">
                    <div className="col mb-3 form-floating">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="First Name"
                        id="firstName"
                      />
                      <label
                        for="firstName"
                        className="form-label form-label-lg fw-bold"
                      >
                        First Name
                      </label>
                    </div>
                    <div className="col mb-3 form-floating">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Last Name"
                        id="lastname"
                      />
                      <label
                        for="lastname"
                        className="form-label form-label-lg fw-bold"
                      >
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3 form-floating">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="inputEmail"
                      placeholder="Email"
                    />
                    <label
                      for="inputEmail"
                      className="form-label form-label-lg fw-bold"
                    >
                      Email
                    </label>
                  </div>
                  <div className="col-md-12 mb-3 form-floating">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label
                      for="subject"
                      className="form-label form-label-lg fw-bold"
                    >
                      Subject
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Leave a comment here"
                      id="message"
                      style={{ height: "100px" }}
                    />
                    <label
                      for="message"
                      className="form-label form-label-lg fw-bold"
                    >
                      Message
                    </label>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="vr bg-white w-10"></div>
          <div className="col">
            <form>
              <div className="mx-auto p-2 card bg-black text-primary-emphasis">
                <div className="row g-3 card-body">
                  <div className="row g-3">
                    <div className="col mb-3 form-floating">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="First Name"
                        id="firstName"
                      />
                      <label
                        for="firstName"
                        className="form-label form-label-lg fw-bold"
                      >
                        First Name
                      </label>
                    </div>
                    <div className="col mb-3 form-floating">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Last Name"
                        id="lastname"
                      />
                      <label
                        for="lastname"
                        className="form-label form-label-lg fw-bold"
                      >
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3 form-floating">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="inputEmail"
                      placeholder="Email"
                    />
                    <label
                      for="inputEmail"
                      className="form-label form-label-lg fw-bold"
                    >
                      Email
                    </label>
                  </div>
                  <div className="col-md-12 mb-3 form-floating">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label
                      for="subject"
                      className="form-label form-label-lg fw-bold"
                    >
                      Subject
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Leave a comment here"
                      id="message"
                      style={{ height: "100px" }}
                    />
                    <label
                      for="message"
                      className="form-label form-label-lg fw-bold"
                    >
                      Message
                    </label>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default ContactForm;
