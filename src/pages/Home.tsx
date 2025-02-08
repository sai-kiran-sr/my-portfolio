import { useEffect } from "react";
import {
  Laptop,
  Code,
  Award,
  Briefcase,
  BarChart2,
  PieChart,
  LineChart,
  Database,
} from "lucide-react";
import { certificates, experience, projects, skills } from "../config/config";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <span className="nav-brand">KK.Dev</span>
          <div className="nav-links">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#certificates" className="nav-link">
              Certificates
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content reveal">
          <h1 className="hero-title">Kiran Kumar S R</h1>
          <div className="icon-row">
            <BarChart2 className="floating-icon" />
            <PieChart className="floating-icon" />
            <LineChart className="floating-icon" />
          </div>
          <p className="hero-subtitle">
            Senior Qlik Sense Developer specializing in transforming complex
            data into actionable insights
          </p>
          <div className="badges">
            <span className="badge">
              <Database /> Data Visualization
            </span>
            <span className="badge">
              <BarChart2 /> Business Intelligence
            </span>
            <span className="badge">
              <PieChart /> Analytics Expert
            </span>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section">
        <h2 className="section-title">
          <Award className="section-icon" /> Certifications
        </h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card reveal">
              <Award className="certificate-icon" />
              <h3>{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">{cert.date}</p>
              <p>{cert.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">
          <Laptop className="section-icon" /> Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card reveal">
              <div className="progress-bar">
                <div className="progress-fill" />
              </div>
              <h3>{project.projectName}</h3>
              <p>{project.projectDescription}</p>
              <div className="badges">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">
          <Code className="section-icon" /> Technical Skills
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card reveal">
              <h3 style={{margin:0}}>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">
          <Briefcase className="section-icon" /> Work Experience
        </h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              } reveal`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p>
                  {exp.company} | {exp.period}
                </p>
                {exp.responsibility.map((res,index)=>(<li key={index}>{res}</li>))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
