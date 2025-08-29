import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">

        <a className="project-card project-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/market.jpg" alt="Direct Market Access" className="project-image" />
          <h3>Direct Market Access</h3>
          <p>Platform removing middlemen: farmers register, list products, track profits, buyers purchase directly. Auto bill generation included.</p>
          <div className="project-tech">React, Flask, Postman</div>
        </a>

        <a className="project-card project-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/crypt.jpg" alt="DNA Cryptography System" className="project-image" />
          <h3>DNA Cryptography System</h3>
          <p>Encrypts messages by converting to binary, mapping with DNA bases (A-T, G-C). Only admins can decrypt to original text.</p>
          <div className="project-tech">Python, Flask, Cryptography</div>
        </a>

        <a className="project-card project-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/green.jpg" alt="Green Route Planner" className="project-image" />
          <h3>Green Route Planner</h3>
          <p>Computes distances, suggests optimal routes, calculates carbon footprint, and provides real-time weather updates.</p>
          <div className="project-tech">Python, APIs, React</div>
        </a>

        <a className="project-card project-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/hosp.jpg" alt="Health Recommendation System" className="project-image" />
          <h3>Health Recommendation System</h3>
          <p>Detects diseases, suggests solutions, personalized skincare, haircare routines, and diet recommendations.</p>
          <div className="project-tech">Python, Poastman</div>
        </a>

        <a className="project-card project-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/plant.jpg" alt="Plant Disease Detector" className="project-image" />
          <h3>Plant Disease Detector</h3>
          <p>Identifies plant diseases from leaf images using machine learning and suggests preventive measures.</p>
          <div className="project-tech">Python, OpenCV</div>
        </a>

        <a className="project-card project-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/pixel.jpg" alt="Pixelation Tool" className="project-image" />
          <h3>Pixelation Tool</h3>
          <p>Uploads images and applies adjustable pixelation filters for privacy and creative effects.</p>
          <div className="project-tech">Python, OpenCV, Flask, </div>
        </a>

      </div>
    </section>
  );
}

export default Projects;
