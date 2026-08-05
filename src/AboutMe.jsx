import profilePic from './assets/736206968_1021461003602371_257057879948685392_n-removebg-preview.png';
import LogoLoop from './LogoLoop.jsx';
import {
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

function TechLogo({ Icon }) {
  return (
    <span className="tech-logo-icon" aria-hidden="true">
      <Icon />
    </span>
  );
}

const techLogos = [
  {
    node: <TechLogo Icon={SiPython} />,
    title: 'Python',
    href: 'https://www.python.org',
  },
  {
    node: <TechLogo Icon={SiJavascript} />,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    node: <TechLogo Icon={SiTypescript} />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
  },
  {
    node: <TechLogo Icon={SiOpenjdk} />,
    title: 'Java',
    href: 'https://openjdk.org',
  },
  {
    node: <TechLogo Icon={SiReact} />,
    title: 'React',
    href: 'https://react.dev',
  },
  {
    node: <TechLogo Icon={SiNextdotjs} />,
    title: 'Next.js',
    href: 'https://nextjs.org',
  },
  {
    node: <TechLogo Icon={SiTailwindcss} />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
  {
    node: <TechLogo Icon={SiHtml5} />,
    title: 'HTML5',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    node: <TechLogo Icon={SiNodedotjs} />,
    title: 'Node.js',
    href: 'https://nodejs.org',
  },
  {
    node: <TechLogo Icon={SiFastapi} />,
    title: 'FastAPI',
    href: 'https://fastapi.tiangolo.com',
  },
  {
    node: <TechLogo Icon={SiPostgresql} />,
    title: 'PostgreSQL',
    href: 'https://www.postgresql.org',
  },
  {
    node: <TechLogo Icon={SiSupabase} />,
    title: 'Supabase',
    href: 'https://supabase.com',
  },
  {
    node: <TechLogo Icon={SiFirebase} />,
    title: 'Firebase',
    href: 'https://firebase.google.com',
  },
  {
    node: <TechLogo Icon={SiGit} />,
    title: 'Git',
    href: 'https://git-scm.com',
  },
  {
    node: <TechLogo Icon={SiGithub} />,
    title: 'GitHub',
    href: 'https://github.com',
  },
  {
    node: <TechLogo Icon={SiDocker} />,
    title: 'Docker',
    href: 'https://www.docker.com',
  },
  {
    node: <TechLogo Icon={SiLinux} />,
    title: 'Linux',
    href: 'https://www.linux.org',
  },
];

function AboutMe() {
  return (
    <section id="home" className="placeholder-section"> {/* The ID is 'home' which matches our nav logic */}
      <div className="about-hero-layout">
        <div className="home-main-content">
          <div className="home-content">
            <div className="profile-name-row">
              <div className="profile-picture-box">
                <img src={profilePic} alt="Raezan Cabang" className="profile-picture" />
              </div>
              <div className="profile-heading">
                <h1>RAEZAN CABANG</h1>
                <p>Software Engineer | Computer Engineering Graduate</p>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/cabang1520/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://github.com/KaizenDubu" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="mailto:raezancabang@gmail.com" aria-label="Email Raezan">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <p className="about-me-text">I am a Computer Engineering graduate from the University of San Carlos based in Cebu, Philippines. I build practical software solutions involving full-stack development, database-backed applications, automation systems, and AI-assisted tools. My experience includes Python, React, SQL, Git, offline-first systems, OCR workflows, and industrial automation simulations.</p>
            <div className="home-buttons">
              <a href="#projects" className="counter">View Projects</a>
              <a href="/public/Resume_Raezan_Cabang.pdf" download="Raezan_CV.pdf" className="counter">Download my CV</a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-tech-loop" aria-label="Core technologies">
        <LogoLoop
          logos={techLogos}
          speed={70}
          direction="right"
          logoHeight={42}
          gap={42}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Core technologies and tools"
        />
      </div>
    </section>
  );
}

export default AboutMe;
