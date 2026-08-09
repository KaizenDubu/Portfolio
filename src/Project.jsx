import { useEffect, useRef, useState } from 'react';
import { FaDatabase, FaExternalLinkAlt, FaGithub, FaImage, FaInfoCircle, FaJava, FaServer, FaTimes } from 'react-icons/fa';
import {
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
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
    demo: 'https://drive.google.com/file/d/1X7minklBWSRj55F3w4knV_DonrIOWRtZ/view',
    summary:
      'A learning platform made for classrooms or labs that need to work even without a reliable internet connection.',
    highlights: [
      'Supports student and teacher accounts with controlled access.',
      'Organizes courses, lessons, and assessments in one local system.',
      'Tested in a lab setup with around 15 users connected through a local network.',
    ],
    techs: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'REST APIs', icon: FaServer },
      { name: 'SQL', icon: FaDatabase },
    ],
  },
  {
    title: 'AI Powered Job Tracker',
    images: [jobTrackerImage, jobTrackerSecondImage],
    demo: 'https://hunt-buddy.vercel.app/login',
    code: 'https://github.com/KaizenDubu/HUNT-BUDDY-AI-Job-Application-Tracker',
    summary:
      'A web app that helps job seekers save applications, track progress, and use AI to pull useful details from job posts.',
    highlights: [
      'Lets users manage job applications in a clean dashboard.',
      'Uses AI-assisted extraction to reduce manual typing from job listings.',
      'Includes secure sign-in, saved records, and a cloud-hosted live demo.',
    ],
    techs: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
  {
    title: 'USCERT I.T.C.H. (INVENTORY TRACKING AND CHECKING HUB) ',
    images: [uscertLoginImage, uscertDashboardImage],
    code: 'https://github.com/KaizenDubu/USCERT-I.T.C.H.',
    summary:
      'An inventory tracking system built to make item records, transactions, and admin access easier to manage.',
    highlights: [
      'Tracks inventory changes and keeps records in a database.',
      'Adds secure admin access for managing important data.',
      'Improves traceability by logging transactions in one central place.',
    ],
    techs: [
      { name: 'Java', icon: FaJava },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Database', icon: FaDatabase },
    ],
  },
];

function ProjectImageCarousel({ images = [], title }) {
  const [activeImage, setActiveImage] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const latestDragOffset = useRef(0);
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

  const showPreviousImage = () => {
    setActiveImage(current => (current - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setActiveImage(current => (current + 1) % images.length);
  };

  const handlePointerDown = event => {
    if (!hasMultipleImages || event.button > 0) {
      return;
    }

    dragStartX.current = event.clientX;
    latestDragOffset.current = 0;
    setIsDragging(true);
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = event => {
    if (!isDragging) {
      return;
    }

    const nextOffset = event.clientX - dragStartX.current;
    latestDragOffset.current = nextOffset;
    setDragOffset(nextOffset);
  };

  const finishDrag = event => {
    if (!isDragging) {
      return;
    }

    const swipeThreshold = 42;
    const finalOffset = latestDragOffset.current;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (Math.abs(finalOffset) > swipeThreshold) {
      if (finalOffset < 0) {
        showNextImage();
      } else {
        showPreviousImage();
      }
    }

    latestDragOffset.current = 0;
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <div
      className={`project-carousel${isDragging ? ' is-dragging' : ''}`}
      role="group"
      aria-label={`${title} image carousel`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
    >
      <div
        className="project-carousel-track"
        style={{
          transform: `translateX(calc(-${activeImage * 100}% + ${dragOffset}px))`,
          transition: isDragging ? 'none' : undefined,
        }}
      >
        {images.map((image, index) => (
          <img
            className="project-carousel-image"
            src={image}
            alt={`${title} preview ${index + 1}`}
            key={image}
            draggable="false"
          />
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

function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="project-details-backdrop" role="presentation" onClick={onClose}>
      <article
        className="project-details-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-details-title"
        onClick={event => event.stopPropagation()}
      >
        <button className="project-details-close" type="button" aria-label="Close project details" onClick={onClose}>
          <FaTimes aria-hidden="true" />
        </button>
        <p className="project-details-label">Project Details</p>
        <h3 id="project-details-title">{project.title}</h3>
        <p className="project-details-summary">{project.summary}</p>

        <ul className="project-details-list">
          {project.highlights.map(highlight => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="project-details-tech" aria-label={`${project.title} technologies`}>
          {project.techs.map(tech => {
            const TechIcon = tech.icon;

            return (
              <span className="project-details-tech-chip" key={tech.name}>
                <TechIcon aria-hidden="true" />
                {tech.name}
              </span>
            );
          })}
        </div>

        <div className="project-details-actions">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer noopener">
              <FaExternalLinkAlt aria-hidden="true" />
              Demo
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noreferrer noopener">
              <FaGithub aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </article>
    </div>
  );
}

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

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
                <button
                  type="button"
                  aria-label={`View details for ${project.title}`}
                  title="View details"
                  onClick={() => setSelectedProject(project)}
                >
                  <FaInfoCircle aria-hidden="true" />
                  <span>View Details</span>
                </button>
                <a
                  className={`project-action-link${project.demo ? '' : ' project-action-link--disabled'}`}
                  href={project.demo || undefined}
                  target={project.demo ? '_blank' : undefined}
                  rel={project.demo ? 'noreferrer noopener' : undefined}
                  aria-label={`Open demo for ${project.title}`}
                  aria-disabled={!project.demo}
                  title="Demo"
                >
                  <FaExternalLinkAlt aria-hidden="true" />
                  <span>Demo</span>
                </a>
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
      {selectedProject && (
        <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

export default Project;
