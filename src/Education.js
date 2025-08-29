import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <section className="education-section">
      <h2>Education 🎓</h2>
      <div className="section-card">
        <ul className="timeline">

          <li className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <h3>🎓 BE in Computer Science</h3>
              <p>CGPA: 8.69</p>
              <p>🏫 PDA College of Engineering</p>
              <p className="timeline-meta">2022 - 2026</p>
            </div>
          </li>

          <li className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <h3>📖 Higher Secondary (12th)</h3>
              <p>Percentage: 93.5%</p>
              <p>🏫 Shree Guru Independent PU College of Science</p>
              <p className="timeline-meta">2020 - 2022</p>
            </div>
          </li>

          <li className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <h3>📚 Secondary (10th)</h3>
              <p>Percentage: 96%</p>
              <p>🏫  St. Jospeh's Convent Girls High School</p>
              <p className="timeline-meta">2008 - 2020</p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
}
