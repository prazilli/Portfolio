import React from 'react';
import './Internships.css';

function Internships() {
  return (
    <section className="internships-section">
      <h2 className="section-title">Internships</h2>
      <div className="internship-container">
        
        <article className="internship-card">
          <header className="internship-header">
            <h3 className="internship-role">👩‍💻 Full Stack Web Development Intern (MERN)</h3>
            <div className="internship-meta">
              <span className="internship-company">Edunet Foundation (in collaboration with EY GDS & AICTE)</span>
              <span className="internship-duration">Mar – Apr 2025</span>
            </div>
          </header>
          <ul className="internship-points">
            <li>Developed full-stack applications using MongoDB, Express.js, React, and Node.js.</li>
            <li>Collaborated on scalable backend APIs and responsive frontend interfaces.</li>
            <li>Worked on industry projects under mentorship from EY GDS professionals.</li>
          </ul>
        </article>

        <article className="internship-card">
          <header className="internship-header">
            <h3 className="internship-role">👩‍💻 Full Stack Development Intern</h3>
            <div className="internship-meta">
              <span className="internship-company">Cognifyz Technologies</span>
              <span className="internship-duration">May – Jun 2025</span>
            </div>
          </header>
          <ul className="internship-points">
            <li>Designed and implemented RESTful APIs for data management.</li>
            <li>Built interactive and dynamic UI components using React.js.</li>
            <li>Optimized web performance and ensured responsiveness across devices.</li>
          </ul>
        </article>

        <article className="internship-card">
          <header className="internship-header">
            <h3 className="internship-role">👩‍💻 Software Engineer Intern</h3>
            <div className="internship-meta">
              <span className="internship-company">YugaYatra Retail (OPC) Pvt. Ltd.</span>
              <span className="internship-duration">Aug 2025 – Oct 2025</span>
            </div>
          </header>
          <ul className="internship-points">
            <li>Currently working on end-to-end software solutions for retail applications.</li>
            <li>Contributing to scalable backend development and deployment.</li>
            <li>Assisting in system optimization and technical documentation.</li>
          </ul>
        </article>

      </div>
    </section>
  );
}

export default Internships;
