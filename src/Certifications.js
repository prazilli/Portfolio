import React from 'react';
import './certifications.css';

function Certifications() {
  const certs = [
    { title: "Responsive Web Design", year: "2025", emoji: "💻", link: "/certs/cert1.png" },
    { title: "Project Expo Participation", year: "2025", emoji: "🎤", link: "/certs/cert2.jpg" },
    { title: "Powering Web & Mobile Apps with NodeJS", year: "2025", emoji: "🟢", link: "/certs/cert3.jpg" },
    { title: "Hack to Future 2025 – Participation", year: "2025", emoji: "🛠️", link: "/certs/cert4.png" },
    { title: "Be10x AI Tools Workshop", year: "2025", emoji: "🤖", link: "/certs/cert5.jpg" },
    { title: "AWS Academy Graduate - AWS Academy Cloud Foundations", year: "2025", emoji: "☁️", link: "/certs/cert6.jpg" },
    
    { title: "Full Stack Development Level 1 Python", year: "2025", emoji: "🐍", link: "/certs/cert7.jpg" },
  ];

  return (
    <section className="certs-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certs-grid">
        {certs.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-emoji">{cert.emoji}</div>
            <h3>{cert.title}</h3>
            <p className="cert-meta">{cert.year}</p>

            {/* Button that opens certificate file */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
