import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-subtitle">
        Let’s build something amazing together ✨  
        <br />Feel free to reach out through any of the options below:
      </p>

      <div className="contact-grid">
        <a className="contact-card fade-in" href="mailto:pratizilli@gmail.com">
          <i className="fa-solid fa-envelope contact-icon"></i>
          <h3>📧 Email</h3>
          <p>pratizilli@gmail.com</p>
        </a>

        <a className="contact-card fade-in" href="tel:+919513487989">
          <i className="fa-solid fa-phone contact-icon"></i>
          <h3>📞 Phone</h3>
          <p>+91 95134 87989</p>
        </a>

        <a 
          className="contact-card fade-in" 
          href="https://www.linkedin.com/in/pratikshazilli1908/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin contact-icon"></i>
          <h3>💼 LinkedIn</h3>
          <p>linkedin.com/in/pratikshazilli1908</p>
        </a>

        <div className="contact-card fade-in">
          <i className="fa-solid fa-location-dot contact-icon"></i>
          <h3>📍 Location</h3>
          <p>Kalaburagi, Karnataka</p>
        </div>
      </div>

      {/* Floating particles for background effect */}
      <div className="particle" style={{ top: "20%", left: "10%" }}></div>
      <div className="particle" style={{ top: "60%", left: "80%" }}></div>
      <div className="particle" style={{ top: "40%", left: "50%" }}></div>
      <div className="particle" style={{ top: "75%", left: "20%" }}></div>
    </section>
  );
}

export default Contact;
