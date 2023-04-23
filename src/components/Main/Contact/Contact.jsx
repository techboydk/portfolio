import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "../../SectionHeading/SectionHeading";
import "../Contact/contact.scss";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nwut98r",
        "template_mf11ckz",
        form.current,
        "V17XQsfwD6fVkgTpP"
      )
      .then(
        (result) => {
          setEmail('');
          setMessage('')
          setName('')
          setSubject('')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact_section" id="contact">
      <SectionHeading heading="contact me" bgText="contact" />
      <div className="form_box">
        <form ref={form} onSubmit={sendEmail}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              name="user_name"
              required
              placeholder="Enter your name..."
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email..."
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            subject:
            <input
              type="text"
              name="subject"
              required
              placeholder="Enter your subject..."
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </label>
          <label>
            message:
            <textarea
              name="message"
              rows="4"
              cols="50"
              type="text"
              required
              placeholder="Enter your message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <button className="header-btn btn" type="submit"  >
            <span>send mail</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
