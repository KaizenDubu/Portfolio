import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Home.jsx';
import Project from './Project.jsx';
import Experience from './Experience.jsx';
import Contact from './Contact.jsx';

function App() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isNavHover, setIsNavHover] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'projects', 'experience', 'contact'];

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
        <Home />
        <Project />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App
