import React from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      {/* Welcome Popup */}
      <div className="welcome-popup">
        <p>
          Welcome to my portfolio! 👋 Explore my world of frontend design and
          coding.
        </p>
      </div>

      <div className="header-content">
        <div className="header-text">
          <h3 className="digital-poetry fade-in delay-2">Digital Poetry</h3>
          <h1 className="fade-in delay-3">Pratiksha Zilli</h1>
          <h2 className="fade-in delay-4">
            Computer Science Student & Web Developer
          </h2>
          <p className="header-bio fade-in delay-5">
            A curious coder exploring creativity through code 👩‍💻
          </p>
          <div className="header-skills fade-in delay-6">
            <span>💻 Web Development</span>
            <span>⚡ React & JS</span>
            <span>🐍 Python</span>
            <span>🎨 UI/UX Design</span>
          </div>
          <p className="header-tagline fade-in delay-7">
            "Turning ideas into code, and code into experiences."
          </p>
          <div className="header-links fade-in delay-8">
            <a href="mailto:pratizilli@gmail.com">📧 Email</a> |{" "}
            <a
              href="https://www.linkedin.com/in/pratikshazilli1908/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a>
          </div>

          {/* Mission & Vision - one below the other */}
          <div className="header-mission-vision fade-in delay-9">
            <div className="mission scroll-box">
              <h3>🌟 My Mission</h3>
              <p>
                To create engaging, user-friendly web experiences that inspire
                and empower users to explore technology creatively. I aim to
                write clean, efficient code while continually learning and
                sharing knowledge with the community.
              </p>
            </div>
            <div className="vision scroll-box">
              <h3>🚀 My Vision</h3>
              <p>
                To become a versatile web developer and designer, blending
                creativity and technology to craft solutions that solve
                real-world problems. I envision building products that leave a
                positive impact on users’ lives and the digital world.
              </p>
            </div>
          </div>

          <div className="fade-in delay-10">
            <a href="/Pratiksha Zilli.pdf" download className="download-btn">
              📄 Download Resume
            </a>
          </div>
        </div>

        <img
          src="/profile.jpg"
          alt="Pratiksha Zilli"
          className="profile-pic float-animation"
        />
      </div>
    </header>
  );
}

export default Header;
