import React from 'react'
import { useState } from 'react'
import SectionTitle from './SectionTitle'

function Services() {
  const [active, setActive] = useState(null);
  const services = [
    {
      title: "Web Designer",
      icon: "uil uil-web-grid",
      description: "Motivated Web Designer with hands-on experience in building responsive and interactive web pages using HTML, CSS, JavaScript, and React. Eager to learn new design trends and contribute creative ideas to real-world projects.",
      bullets: [
        "User Interface Development",
        "Web Page Development",
        "Interactive UX/UI Creations",
        "Company Brand Positioning",
        "Design and Mockup of products for companies",
        "Wireframing & Prototyping",
        "Frontend Development (HTML, CSS, JavaScript, React)",
        "Backend Development (PHP, NodeJS, MySQL, MongoDB)"
      ]
    },
    {
      title: "UI/UX Designer",
      icon: "uil uil-arrow",
      description: "A passionate UI/UX Designer dedicated to creating user-friendly, visually appealing, and accessible digital products through research-driven design and modern UI principles.",
      bullets: [
        "Usability Testing",
        "User Research",
        "Interaction Design",
        "Responsive Design",
        "Branding & Style Guides",
        "Accessibility"
      ]
    }
  ];

  return (
    <section className="services section" id="services">
      <SectionTitle heading="Services" title="I'm capable of" />
      <div className="services-container container grid" style={{ gridTemplateColumns: 'repeat(2, 250px)' }}>
        {services.map((service, idx) => (
          <div key={service.title} className="services-content">
            <div>
              <i className={`${service.icon} services-icon`}></i>
              <h3 className="services-title">
                {service.title.split(" ").map((part, i) => (
                  <React.Fragment key={part + i}>
                    {part}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
            </div>
            <span className="services-button" onClick={() => setActive(idx)}>
              View More <i className="uil uil-arrow-right services-button-icon"></i>
            </span>

            <div className={`services-modal ${active === idx ? "active-modal" : ""}`}>
              <div className={`services-modal-content ${active === idx ? 'open' : ''}`}>
                <i className="uil uil-times services-modal-close" onClick={() => setActive(null)}></i>
                <h3 className="services-modal-title">{service.title}</h3>
                <p className="services-modal-description">{service.description}</p>
                <ul className="services-modal-services grid">
                  {service.bullets.map((b) => (
                    <li key={b} className="services-modal-service">
                      <i className="uil uil-check-circle services-modal-icon"></i>
                      <p className="services-modal-info">{b}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services
