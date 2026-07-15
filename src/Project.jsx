import React from 'react';

function Project() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div className="portfolio-title-container">
          <h2 className="portfolio-title">Portfolio</h2>
          <p>
            A collection of my favorite projects I've worked on. <br />
            Feel free to browse and explore.
          </p>
        </div>
        <nav className="project-nav">
          <ul>
            <li><button className="active">All Work</button></li>
            <li><button>Personal Project</button></li>
            <li><button>Professional Project</button></li>
          </ul>
        </nav>
      </div>
      <div className="project-grid">
        {/* These are placeholder boxes for your projects */}
        <div className="project-card">
          <p>Project 1 Placeholder</p>
        </div>
        <div className="project-card">
          <p>Project 2 Placeholder</p>
        </div>
        <div className="project-card">
          <p>Project 3 Placeholder</p>
        </div>
      </div>
    </section>
  );
}

export default Project;