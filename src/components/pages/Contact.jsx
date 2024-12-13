import React from "react";
import HeroSection from "../common/ui-sections/workHeroSection";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import ContactForm from "../common/ui-sections/contact/ContactForm";
import { heroImage } from "../../assets";

function Contact() {
  return (
    <>
    <div className="contactHero">
      <HeroSection
        banner={{
          image: heroImage,
          title: "Contact",
          description: "Give us a few details and we'll offer the best solution. Connect by phone, chat, email, and more...",
        }}
      />
      </div>
      <ArrowBounce id="contact-section" />
      <ContactForm />
    </>
  );
}

export default Contact;
