import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="projects-header">
        <div className="portfolio-title-container">
          <h2 className="portfolio-title">Contact</h2>
          <p>
            Have a question or want to work together? <br />
            Feel free to reach out.
          </p>
        </div>
      </div>

      <div className="contact-content-area">
        {/* Left Column: Contact Info */}
        <div className="contact-info">
          <div className="contact-info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>+63 947 8039 510</span>
          </div>
          <div className="contact-info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>raezancabang@gmail.com</span>
          </div>
          <div className="contact-info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Cebu, Philippines</span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group-full">
              <h1 className="form-title">Get in Touch</h1>
            </div>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="tel" id="phone" name="phone" placeholder="Your Phone (Optional)" />
            </div>
            <div className="form-group">
              <input type="text" id="subject" name="subject" placeholder="Subject" />
            </div>
            <div className="form-group form-group-full">
              <textarea id="message" name="message" rows="5" placeholder="Your message here..."></textarea>
            </div>
            <div className="form-group-full">
              <button type="submit" className="submit-button">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;