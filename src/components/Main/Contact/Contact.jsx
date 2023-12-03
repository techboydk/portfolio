import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import "../Contact/contact.scss";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact_section" id="contact">
      <SectionHeading heading="contact me" bgText="contact" />
      <button className="header-btn btn" type="submit">
        <Link to={"mailto:003yadavdipesh@gmail.com"}>
          <span>send mail</span>
        </Link>
      </button>
    </div>
  );
};

export default Contact;
