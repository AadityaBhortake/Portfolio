import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './App.css';

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="app-container">
      <main className="container">
        
        {/* Hero Section */}
        <section className="hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="hero-greeting">Hi, my name is</p>
            <h1 className="hero-name">Aaditya Bhortake.</h1>
            <h2 className="hero-role">I build things for the web.</h2>
            <p className="hero-desc">
              I'm a computer engineering student specializing in full-stack development,
              passionate about building exceptional digital experiences and solving complex 
              problems with modern web technologies.
            </p>
            
            <div className="hero-links">
              <a href="mailto:aaditya.bhortake@gmail.com" className="btn">
                <FaEnvelope size={18} />
                Get In Touch
              </a>
              <a href="https://linkedin.com/in/aaditya-bhortake" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaLinkedin size={22} />
              </a>
              <a href="https://github.com/AadityaBhortake" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaGithub size={22} />
              </a>
              <a href="tel:+917021501055" className="icon-link">
                <FaPhone size={22} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section className="section-padding" id="education">
          <FadeInWhenVisible>
            <h3 className="section-title">Education</h3>
            <div className="card list-item">
              <div className="item-header">
                <div>
                  <h4 className="item-title">Shah and Anchor Kutchhi Engineering College, Mumbai</h4>
                  <p className="item-subtitle">Bachelor of Technology in Computer Engineering</p>
                </div>
                <div className="item-date">Aug. 2023 - Present</div>
              </div>
              <p className="item-detail"><strong>CGPA:</strong> 9.19/10</p>
              <p className="item-detail">
                <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Cloud Computing
              </p>
            </div>

            <div className="card list-item mt-4" style={{ marginTop: '1.5rem' }}>
              <div className="item-header">
                <div>
                  <h4 className="item-title">Pace Junior Science College, Thane</h4>
                  <p className="item-subtitle">Higher Secondary Certificate (Class 12)</p>
                </div>
                <div className="item-date">2021 - 2023</div>
              </div>
              <p className="item-detail"><strong>Percentage:</strong> 75.5%</p>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* Projects Section */}
        <section className="section-padding" id="projects">
          <FadeInWhenVisible>
            <h3 className="section-title">Projects</h3>
            <div className="projects-grid">
              
              {/* Project 1 */}
              <div className="card project-card">
                <div className="project-header">
                  <FaCode className="text-accent" color="var(--accent-light)" size={32} />
                  <div className="project-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
                <h4 className="project-title mb-2" style={{ marginBottom: '0.5rem' }}>CloudResume</h4>
                <div className="project-desc">
                  <ul>
                    <li>Built a responsive resume builder with live preview and customizable templates.</li>
                    <li>Developed backend logic to render templates and generate PDFs using html2pdf.</li>
                    <li>Created REST APIs for authentication and resume management, storing user data in AWS RDS and files in S3.</li>
                    <li>Deployed the app on Elastic Beanstalk with environment-based configuration.</li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span className="badge">HTML/CSS/JS</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">AWS (S3, RDS, EB)</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="card project-card">
                <div className="project-header">
                  <FaCode className="text-accent" color="var(--accent-light)" size={32} />
                  <div className="project-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
                <h4 className="project-title mb-2" style={{ marginBottom: '0.5rem' }}>PlacementPortal</h4>
                <div className="project-desc">
                  <ul>
                    <li>Designed responsive UI pages for student profiles, job listings, applications, and company workflows.</li>
                    <li>Built modular Express.js APIs for students, companies, job drives, and application handling.</li>
                    <li>Modeled users, drives, and applications using MongoDB + Mongoose.</li>
                    <li>Containerized backend and database using Docker Compose.</li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span className="badge">HTML/CSS/JS</span>
                  <span className="badge">Express.js</span>
                  <span className="badge">MongoDB</span>
                  <span className="badge">Docker</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="card project-card">
                <div className="project-header">
                  <FaCode className="text-accent" color="var(--accent-light)" size={32} />
                  <div className="project-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
                <h4 className="project-title mb-2" style={{ marginBottom: '0.5rem' }}>FlyIndia - Airline System</h4>
                <div className="project-desc">
                  <ul>
                    <li>Developed a Java Swing UI for flight search, booking, and ticket generation.</li>
                    <li>Implemented client-server communication using Java Sockets.</li>
                    <li>Built backend logic for booking workflows, integrated with MySQL via JDBC.</li>
                    <li>Designed normalized tables for flights, users, and bookings.</li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span className="badge">Java (Swing)</span>
                  <span className="badge">Java Sockets</span>
                  <span className="badge">MySQL (JDBC)</span>
                </div>
              </div>

            </div>
          </FadeInWhenVisible>
        </section>

        {/* Technical Skills Section */}
        <section className="section-padding" id="skills">
          <FadeInWhenVisible>
            <h3 className="section-title">Technical Skills</h3>
            <div className="card skills-container">
              <div className="skill-category">
                <div className="skill-name">Languages</div>
                <div className="skill-list">
                  <span className="badge">Java</span>
                  <span className="badge">Python</span>
                  <span className="badge">JavaScript</span>
                  <span className="badge">C++</span>
                  <span className="badge">C</span>
                </div>
              </div>
              <div className="skill-category">
                <div className="skill-name">Web Technologies</div>
                <div className="skill-list">
                  <span className="badge">HTML</span>
                  <span className="badge">CSS</span>
                  <span className="badge">React</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">Express.js</span>
                </div>
              </div>
              <div className="skill-category">
                <div className="skill-name">Databases</div>
                <div className="skill-list">
                  <span className="badge">MySQL</span>
                  <span className="badge">MongoDB</span>
                </div>
              </div>
              <div className="skill-category">
                <div className="skill-name">Developer Tools</div>
                <div className="skill-list">
                  <span className="badge">Git</span>
                  <span className="badge">GitHub</span>
                  <span className="badge">VS Code</span>
                  <span className="badge">IntelliJ IDEA</span>
                  <span className="badge">NetBeans</span>
                  <span className="badge">Docker</span>
                </div>
              </div>
              <div className="skill-category">
                <div className="skill-name">Cloud</div>
                <div className="skill-list">
                  <span className="badge">AWS (Basics)</span>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* Certifications & Initiatives */}
        <section className="section-padding mb-8" id="more">
          <FadeInWhenVisible>
            <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
              
              <div>
                <h3 className="section-title">Certifications</h3>
                <ul className="card" style={{ paddingLeft: '2.5rem' }}>
                  <li className="mb-2" style={{ marginBottom: '0.75rem' }}><strong>AI-ML Virtual Internship</strong> - AICTE & Google for Developers (2024)</li>
                  <li className="mb-2" style={{ marginBottom: '0.75rem' }}><strong>Android Developer Virtual Internship</strong> - AICTE & Google for Developers (2024)</li>
                  <li className="mb-2" style={{ marginBottom: '0.75rem' }}><strong>AWS Cloud Practitioner Essentials</strong> - AWS Training & Certification (2025)</li>
                  <li className="mb-2" style={{ marginBottom: '0.75rem' }}><strong>Networking Basics</strong> - Cisco Networking Academy (2025)</li>
                  <li style={{ marginBottom: '0.75rem' }}><strong>Java Training</strong> - IIT Bombay Spoken Tutorial (2024)</li>
                </ul>
              </div>

              <div>
                <h3 className="section-title">Learning & Initiatives</h3>
                <ul className="card" style={{ paddingLeft: '2.5rem' }}>
                  <li className="mb-2" style={{ marginBottom: '0.75rem' }}>Practicing full-stack development through personal projects and self-learning.</li>
                  <li className="mb-2" style={{ marginBottom: '0.75rem' }}>Solving DSA problems regularly to improve problem-solving skills.</li>
                  <li style={{ marginBottom: '0.75rem' }}>Actively exploring AWS services and cloud deployment strategies.</li>
                </ul>
              </div>

            </div>
          </FadeInWhenVisible>
        </section>

        <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
          <p>© 2026 Aaditya Bhortake. Built with React & Framer Motion.</p>
        </footer>

      </main>
    </div>
  );
}

export default App;
