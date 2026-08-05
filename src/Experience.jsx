import AccordionGallery from './AccordionGallery.jsx';
import experienceOne from './assets/Experience/653873184_1447698017371814_1461827941846836427_n.jpg';
import experienceTwo from './assets/Experience/765871209_1840433093979932_4424243361922796842_n.jpg';
import experienceThree from './assets/Experience/736206968_1021461003602371_257057879948685392_n.jpg';

const experienceItems = [
  { image: experienceOne, label: 'Robocon 2026', link: '#' },
  { image: experienceTwo, label: 'Cubeworks Internship', link: '#' },
  { image: experienceThree, label: 'Graduation', link: '#' },
  { image: '', label: 'Soon to be filled', link: '#' },
  { image: '', label: 'Soon to be filled', link: '#' },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="projects-header">
        <div className="portfolio-title-container">
          <h2 className="portfolio-title">Experience</h2>
          <p>
           A timeline of the experiences, projects, and milestones that shaped my career in software engineering.
          </p>
        </div>
      </div>

      <AccordionGallery
        items={experienceItems}
        defaultIndex={2}
        expandRatio={0.52}
        accentColor="#ffffff"
        overlayColor="#060010"
        textColor="#ffffff"
        grayscale
        showLabels
        height={460}
        gap={10}
        radius={16}
        orientation="horizontal"
      />
    </section>
  );
}

export default Experience;
