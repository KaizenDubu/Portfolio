import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaImage, FaInfoCircle } from 'react-icons/fa';
import offlineLmsImage from './assets/Projects/Screenshot 2026-08-06 160824.png';
import offlineLmsSecondImage from './assets/Projects/Screenshot 2026-08-06 173406.png';
import jobTrackerImage from './assets/Projects/Screenshot 2026-08-06 171126.png';
import jobTrackerSecondImage from './assets/Projects/Screenshot 2026-08-06 173743.png';
import uscertLoginImage from './assets/Projects/Screenshot 2026-08-06 172331.png';
import uscertDashboardImage from './assets/Projects/Screenshot 2026-08-06 172538.png';

const projects = [
  {
    title: 'Offline LMS (2026)',
    images: [offlineLmsSecondImage, offlineLmsImage],
  },
  {
    title: 'AI Powered Job Tracker',
    images: [jobTrackerImage, jobTrackerSecondImage],
    code: 'https://github.com/KaizenDubu/HUNT-BUDDY-AI-Job-Application-Tracker',
  },
  {
    title: 'USCERT I.T.C.H. (INVENTORY TRACKING AND CHECKING HUB) ',
    images: [uscertLoginImage, uscertDashboardImage],
    code: 'https://github.com/KaizenDubu/USCERT-I.T.C.H.',
  },
];

function ProjectImageCarousel({ images = [], title }) {
  const [activeImage, setActiveImage] = useState(0);
  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  if (!hasImages) {
    return (
      <>
        <FaImage aria-hidden="true" />
        <span>Project image placeholder</span>
      </>
    );
  }

  const showNextImage = () => {
    if (hasMultipleImages) {
      setActiveImage(current => (current + 1) % images.length);
    }
  };

  return (
    <div className="project-carousel" onClick={showNextImage} role="group" aria-label={`${title} image carousel`}>
      <div className="project-carousel-track" style={{ transform: `translateX(-${activeImage * 100}%)` }}>
        {images.map((image, index) => (
          <img className="project-carousel-image" src={image} alt={`${title} preview ${index + 1}`} key={image} />
        ))}
      </div>
      {hasMultipleImages && (
        <div className="project-carousel-dots" aria-label={`${title} image navigation`}>
          {images.map((image, index) => (
            <button
              className={`project-carousel-dot${activeImage === index ? ' active' : ''}`}
              type="button"
              aria-label={`Show ${title} image ${index + 1}`}
              aria-current={activeImage === index}
              key={image}
              onClick={event => {
                event.stopPropagation();
                setActiveImage(index);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

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
            <div className={`project-card-image${project.images?.length ? ' project-card-image--media' : ''}`}>
              <ProjectImageCarousel images={project.images} title={project.title} />
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
                <a
                  className={`project-action-link${project.code ? '' : ' project-action-link--disabled'}`}
                  href={project.code || undefined}
                  target={project.code ? '_blank' : undefined}
                  rel={project.code ? 'noreferrer noopener' : undefined}
                  aria-label={`Open code for ${project.title}`}
                  aria-disabled={!project.code}
                  title="Code"
                >
                  <FaGithub aria-hidden="true" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
