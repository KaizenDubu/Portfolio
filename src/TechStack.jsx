import { FaBrain, FaDatabase, FaRobot, FaServer } from 'react-icons/fa';
import {
  SiClaudecode,
  SiCss,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNodered,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from 'react-icons/si';

const techGroups = [
  {
    title: 'Languages',
    items: [
      { label: 'Python', Icon: SiPython },
      { label: 'JavaScript', Icon: SiJavascript },
      { label: 'TypeScript', Icon: SiTypescript },
      { label: 'Java', Icon: SiOpenjdk },
      { label: 'SQL', Icon: FaDatabase },
      { label: 'HTML5', Icon: SiHtml5 },
      { label: 'CSS3', Icon: SiCss },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { label: 'React', Icon: SiReact },
      { label: 'Next.js', Icon: SiNextdotjs },
      { label: 'Tailwind CSS', Icon: SiTailwindcss },
      { label: 'Vue.js', Icon: SiVuedotjs },
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'Node.js', Icon: SiNodedotjs },
      { label: 'FastAPI', Icon: SiFastapi },
      { label: 'REST APIs', Icon: FaServer },
      { label: 'JSON', Icon: SiJson },
      { label: 'Supabase', Icon: SiSupabase },
    ],
  },
  {
    title: 'Database & Cloud',
    items: [
      { label: 'PostgreSQL', Icon: SiPostgresql },
      { label: 'MySQL', Icon: SiMysql },
      { label: 'Firebase', Icon: SiFirebase },
      { label: 'Vercel', Icon: SiVercel },
    ],
  },
  {
    title: 'AI Technologies',
    items: [
      { label: 'LLMs', Icon: FaBrain },
      { label: 'OpenAI', Icon: FaRobot },
      { label: 'Claude Code', Icon: SiClaudecode },
    ],
  },
  {
    title: 'Tools',
    items: [
      { label: 'Git', Icon: SiGit },
      { label: 'GitHub', Icon: SiGithub },
      { label: 'GitLab CI/CD', Icon: SiGitlab },
      { label: 'Linux', Icon: SiLinux },
      { label: 'Docker', Icon: SiDocker },
      { label: 'Node-RED', Icon: SiNodered },
    ],
  },
];

function TechStack() {
  return (
    <section id="techstack" className="techstack-section">
      <div className="projects-header">
        <div className="portfolio-title-container">
          <h2 className="portfolio-title">Tech Stack</h2>
          <p>
            Tools and technologies I use to build practical software systems.
          </p>
        </div>
      </div>

      <div className="techstack-grid">
        {techGroups.map(group => (
          <article className="techstack-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map(item => (
                <li key={item.label}>
                  <item.Icon aria-hidden="true" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
