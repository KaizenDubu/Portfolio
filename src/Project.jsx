import { FaExternalLinkAlt, FaGithub, FaImage, FaInfoCircle } from 'react-icons/fa';
import offlineLmsImage from './assets/Projects/Screenshot 2026-08-06 160824.png';
import jobTrackerImage from './assets/Projects/Screenshot 2026-08-06 171126.png';

const projects = [
  {
    title: 'Offline LMS (2026)',
    image: offlineLmsImage,

  },
  {
    title: 'AI Powered Job Tracker',
    image: jobTrackerImage,
    code: 'https://github.com/KaizenDubu/HUNT-BUDDY-AI-Job-Application-Tracker.git',
  },
  {
    title: 'USCERT I.T.C.H. (INVENTORY TRACKING AND CHECKING HUB) ',
  },
];

function Project() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div className="portfolio-title-container">
          <h2 className="portfolio-title">Projects</h2>
          <p>
            A collection of my favorite projects I've worked on. <br />
            Feel free to browse and explore.
          </p>
        </div>
      </div>
      <div className="project-grid">
        {projects.map(project => (
          <article className="project-card" key={project.title}>
            <div className="project-card-image">
              {project.image ? (
                <img src={project.image} alt={`${project.title} preview`} />
              ) : (
                <>
                  <FaImage aria-hidden="true" />
                  <span>Project image placeholder</span>
                </>
              )}
            </div>
            <div className="project-card-body">

              {project.type && <p className="project-card-type">{project.type}</p>}
              <h3>{project.title}</h3>
              <div className="project-card-actions" aria-label={`${project.title} actions`}>
                <button type="button" aria-label={`View details for ${project.title}`} title="View details">
                  <FaInfoCircle aria-hidden="true" />
                  <span>View Details</span>
                </button>
                <button type="button" aria-label={`Open demo for ${project.title}`} title="Demo">
                  <FaExternalLinkAlt aria-hidden="true" />
                  <span>Demo</span>
                </button>
                <button type="button" aria-label={`Open code for ${project.title}`} title="Code">
                  <FaGithub aria-hidden="true" />
                  <span>Code</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
