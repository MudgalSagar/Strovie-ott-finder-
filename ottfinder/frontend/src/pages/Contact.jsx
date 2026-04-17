import React from 'react';
import "./style/Contact.css"
const Contact = () => {
  return (
    <div className = "background-theme">
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form action="https://formsubmit.co/mudgalsagar42@gmail.com" method="POST" className="contact-form">
        <input type="hidden" name="_captcha" value="false" />
        
        <label htmlFor="name">Name</label>
        <input type="text" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
