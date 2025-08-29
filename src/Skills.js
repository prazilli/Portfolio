import React from 'react';
import './Skills.css';
import { FaCode, FaDatabase, FaLaptopCode, FaTools, FaUsers } from "react-icons/fa";

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-wrapper">
        
        <div className="skill-item">
          <FaCode className="skill-icon" />
          <h3>Programming</h3>
          <p>Python, C & UNIX, C++</p>
        </div>

        <div className="skill-item">
          <FaLaptopCode className="skill-icon" />
          <h3>Web Development</h3>
          <p>HTML, CSS, JavaScript, React, Node.js, REST APIs</p>
        </div>

        <div className="skill-item">
          <FaDatabase className="skill-icon" />
          <h3>Databases</h3>
          <p>MySQL, Database Management System</p>
        </div>

        <div className="skill-item">
          <FaTools className="skill-icon" />
          <h3>Tools & Frameworks</h3>
          <p>Flask, OpenCV, GitHub, Postman (API Testing)</p>
        </div>

        <div className="skill-item">
          <FaUsers className="skill-icon" />
          <h3>Soft Skills</h3>
          <p>Communication, Teamwork, Leadership, Problem - Solving, Keen Listener, Time Management, Creativity</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
