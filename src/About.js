import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-card">
        <h2 className="about-heading">👋 Hi, I'm Pratiksha</h2>
        <p className="about-subtitle">A Computer Science Student & Aspiring Developer</p>

        <div className="about-content">
          <p className="about-text">💡 Passionate about <strong>Web Development</strong> & <strong>UI/UX Design</strong></p>
          <p className="about-text">🚀 Worked on projects in <strong>React</strong>, <strong>JavaScript</strong>, and <strong>Python</strong></p>
          <p className="about-text">🎨 Enthusiastic about building creative and user-friendly experiences</p>
        </div>

        <div className="about-funfacts">
          <h3 className="fun-title">✨ Fun Facts</h3>
          <ul>
            <li>☕ Tea keeps me going</li>
            <li>🎵 Love coding with music</li>
            <li>📚 Always curious to learn something new</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
