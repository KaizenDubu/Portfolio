import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isNavHover, setIsNavHover] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'about', 'project', 'experience', 'contact'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e) => {
      setIsNavHover(!!e.target.closest('.nav-link'));
    };
    const handleMouseOut = (e) => {
      setIsNavHover(!!e.target.closest('.nav-link') && false);
    };
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" style={{ left: `${position.x}px`, top: `${position.y}px` }} />
      <div className={`cursor-moon ${isNavHover ? 'crescent' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px` }} />
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            {sections.map(section => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="placeholder-section">
          <div className="home-content">
            <h1>HI, I'M RAEZAN</h1>
            <p>A Software Engineer</p>
            <div className="home-buttons">
              <a href="/public/Resume_Raezan_Cabang.pdf" target="_blank" rel="noopener noreferrer" className="counter">View my CV</a>
              <a href="/public/Resume_Raezan_Cabang.pdf" download="Raezan_CV.pdf" className="counter">Download my CV</a>
            </div>
          </div>
        </section>



        <section id="about" className="placeholder-section">
          <h1>About me</h1>
          <p>Hi, I’m Raezan A. Cabang, a Computer Engineering graduate from the University of San Carlos with a strong interest in software development, automation, and practical problem-solving.

              I enjoy building software that solves real problems, improves daily workflows, and makes tasks more efficient. My experience includes developing full-stack applications, database-backed systems, automation simulations, and AI-assisted tools using technologies such as Python, React, JavaScript, SQL, PostgreSQL, MySQL, Node-RED, and Git.

              Through my internship and academic projects, I have worked on systems involving OCR-based data extraction, offline-first learning platforms, inventory tracking, industrial automation simulation, and embedded systems. I am especially interested in creating reliable, useful, and maintainable software while continuing to grow my skills in cloud, DevOps, and automation technologies.
        </p>
        </section>
        <section id="project" className="placeholder-section">
          <h1>Project</h1>
        </section>
        <section id="experience" className="placeholder-section">
          <h1>Experience</h1>
        </section>
        <section id="contact" className="placeholder-section">
          <h1>Contact</h1>
        </section>
      </main>
    </>
  )
}

export default App
