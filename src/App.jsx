import { useEffect, useState } from 'react'
import './App.css'
import AboutMe from './AboutMe.jsx';
import Project from './Project.jsx';
import TechStack from './TechStack.jsx';
import Experience from './Experience.jsx';
import Contact from './Contact.jsx';

const sections = ['home', 'projects', 'techstack', 'experience', 'contact'];

// This object maps the section ID to the text you want to display in the navigation.
const sectionDisplayNames = {
  home: 'Home',
  projects: 'Projects',
  techstack: 'Tech Stack',
  experience: 'Experience',
  contact: 'Contact',
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            {sections.map(section => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {sectionDisplayNames[section]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <AboutMe />
        <Project />
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App
