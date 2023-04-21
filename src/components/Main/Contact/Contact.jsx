import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import SectionHeading from '../../SectionHeading/SectionHeading'
import '../Contact/contact.scss'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_nwut98r', 'template_mf11ckz', form.current, 'V17XQsfwD6fVkgTpP')
        .then((result) => {
            console.log(result.text);
            window.location.reload();
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="contact_section" id='contact'>
            <SectionHeading heading="contact us" bgText="contact" />
            <div className="form_box">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="name">
                        <label htmlFor="user_name">Name</label>
                        <input type="text" name="user_name" placeholder='Enter your name...' />
                    </div>
                    <div className="email">
                        <label htmlFor="user_email">email</label>
                        <input type="text" name="user_email" placeholder='Enter your email...' />
                    </div>
                    <div className="subject">
                        <label htmlFor="subject">subject</label>
                        <input type="text" name="subject" placeholder='Enter your subject...' />
                    </div>
                    <div className="message">
                        <label htmlFor="message">message</label>
                        <textarea name="message" rows="4" cols="50" type="text" placeholder='Enter your message...' />
                    </div>
                </form>
                <div className="header-btn btn" onClick={sendEmail}><span>send mail</span></div>
            </div>
        </div>
    )
}

export default Contact