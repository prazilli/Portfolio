import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">CONTACT ME</h2>
      <p className="contact-subtitle">
        Let’s build something amazing together ✨  
        <br />Feel free to reach out through any of the options below:
      </p>

      <div className="contact-grid">
        <a className="contact-card" href="mailto:pratizilli@gmail.com">
          <i className="fa-solid fa-envelope contact-icon email"></i>
          <h3>📧 Email</h3>
          <p>pratizilli@gmail.com</p>
        </a>

        <a className="contact-card" href="tel:+919513487989">
          <i className="fa-solid fa-phone contact-icon phone"></i>
          <h3>📞 Phone</h3>
          <p>+91 95134 87989</p>
        </a>

        <a 
          className="contact-card" 
          href="https://www.linkedin.com/in/pratikshazilli1908/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin contact-icon linkedin"></i>
          <h3>💼 LinkedIn</h3>
          <p>linkedin.com/in/pratikshazilli1908</p>
        </a>

        <div className="contact-card">
          <i className="fa-solid fa-location-dot contact-icon location"></i>
          <h3>📍 Location</h3>
          <p>Kalaburagi, Karnataka</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
