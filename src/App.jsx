import { useEffect, useState } from 'react'
import './App.css'
import { FaMoon, FaSun } from 'react-icons/fa';
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
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

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
    <div className={`app-shell theme-${theme}`}>
      <div className="theme-background" aria-hidden="true" />
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
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-pressed={theme === 'light'}
          onClick={() => setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'))}
        >
          <FaSun className={theme === 'light' ? 'theme-toggle-icon active' : 'theme-toggle-icon'} aria-hidden="true" />
          <FaMoon className={theme === 'dark' ? 'theme-toggle-icon active' : 'theme-toggle-icon'} aria-hidden="true" />
        </button>
      </header>
      <main>
        <AboutMe />
        <Project />
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
