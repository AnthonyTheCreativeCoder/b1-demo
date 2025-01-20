import React, { useState } from "react";
import HeroSection from "../common/ui-sections/workHeroSection";
import ArrowBounce from "../common/ui-sections/ArrowBounce";
import ContactForm from "../common/ui-sections/ContactForm";
import { heroImage } from "../../assets";
import useContactForm from "../../hooks/react-query/useContactForm";
import useContactPage from "../../hooks/react-query/useContactPage";

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
  const {dataser, isLoadingdata, errordata} = useContactPage();
  let headline = '';
  let contact_sub_heading = '';
  let contact_banner_content = '';
  let contact_subheading_content = '';
  let contact_phone = '';
  let contact_email = '';
  let contact_address = '';
  

  if (isLoadingdata) {
    // console.log("Loading data...");
  } else if (dataser && dataser.contact_data) {
    // console.log(dataser.contact_data);
    headline = dataser.contact_data.contact_heading;
    contact_sub_heading = dataser.contact_data.contact_sub_heading;
    contact_banner_content = dataser.contact_data.contact_banner_content;
    contact_subheading_content = dataser.contact_data.contact_subheading_content;
    contact_phone = dataser.contact_data.contact_phone;
    contact_email = dataser.contact_data.contact_email;
    contact_address = dataser.contact_data.contact_address;

  }


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
            title: headline,
            description:
            contact_banner_content
          }}
        />
      </div>
      <ArrowBounce id="contact-section"/>
      <ContactForm  contact_sub_heading={contact_sub_heading} contact_subheading_content={contact_subheading_content} contact_phone={contact_phone} contact_email={contact_email} contact_address={contact_address}/>
    
    </>
  );
}

export default Contact;
