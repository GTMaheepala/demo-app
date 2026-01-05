import React, { useState, useMemo } from 'react'
import SectionTitle from './SectionTitle'



const defaultPortfolio = [
  {
    _id: 1,
    title: "Police 360 Web Design",
    category: "web",
    image: "/police360.png",
    link: "https://police360-frontend.vercel.app/",
    description: "A full-stack system to manage police complaints, officers, evidence, and case progress efficiently.",
    details: { year: 2025, technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS"], role: "complaint management" }
  },
  {
    _id: 2,
    title: "The Fresh Mart Web Design",
    category: "web",
    image: "/grocery.png",
    description: "Built a web-based grocery ordering system to digitize local grocery shopping for efficiency and convenience.",
    details: { year: 2025, technologies: ["JAVA", "PHP", "HTML", "JavaScript", "CSS", "MySQL"], role: "Role based user management , Frontend and Backend Development" }
  },
  {
    _id: 3,
    title: "Fashion Haven Web Design",
    category: "web",
    image: "/fashion.png",
    description: "Developed a dynamic and responsive fashion retail website targeting youth and style-conscious shoppers.",
    details: { year: 2024, technologies: ["HTML", "JavaScript", "CSS", "MySQL"],role: "Role based user management , Frontend and Backend Development" }
  },
  {
    _id: 4,
    title: "Furni House Mobile App",
    category: "app",
    image: "/Furni app.jpg",
    description: "Android mobile application & A native Android app built to simplify furniture shopping with a smooth and modern mobile experience.",
    details: { year: 2025, technologies: ["Kotlin", "Android SDK", "Gradle"],role: "UI/UX Design , Function" }
  },
  {
    _id: 5,
    title: "Wellnest Mobile App",
    category: "app",
    image: "/wellnest.png",
    description: "Android mobile application & A wellness app promoting healthy habits through guided activities and progress tracking.",
    details: { year: 2025, technologies: ["Kotlin", "Android SDK", "Gradle"], role: "UI/UX Design , Key Functionality" }
  },
  {
    _id: 6,
    title: "Furni House UI Design",
    link: "https://www.figma.com/design/DQ1EnZz4vmupHuVuHbYMRB/Untitled?node-id=0-1&t=dqVAw0hg1XTrTBpp-1",
    category: "design",
    image: "/furni house uiux.png",
    description: "Complete UI design system",
    details: { year: 2025, technologies: ["Figma", "Design System"], role: "UI/UX Design" }
  }
];

function Work({ items = defaultPortfolio, filters = [] }) {
  const [filter, setFilter] = useState("all");
  const [modalItem, setModalItem] = useState(null);

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [filter, items]
  );

  return (
    <section className="work section" id="work">
      <SectionTitle heading="My Portfolio" title="Recent Works" />
      <div className="work-filters">
        {filters.map((f) => (
          <span
            key={f.key}
            className={`work-item ${filter === f.key ? "active-work" : ""}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </span>
        ))}
      </div>

      <div className="work-container container grid">
        {filtered.map((item) => (
          <div key={item._id || item.title} className={`work-card mix ${item.category}`}>
            <img src={item.image} alt={item.title} className="work-img" />
            <h3 className="work-title">{item.title}</h3>
            <span className="work-button" onClick={() => setModalItem(item)}>
              Demo<i className="uil uil-arrow-right work-button-icon"></i>
            </span>

            <div className="portfolio-item-details">
              <h3 className="details-title">{item.details?.title || item.title}</h3>
              <p className="details-description">{item.description}</p>
              <ul className="details-info">
                {item.details?.year && (
                  <li>
                    Created - <span>{item.details.year}</span>
                  </li>
                )}
                {item.details?.technologies?.length && (
                  <li>
                    Technologies - <span>{item.details.technologies.join(", ")}</span>
                  </li>
                )}
                <li>
                  Role - <span>{item.details.role}</span>
                </li>
              </ul>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="button" style={{ marginTop: '1rem' }}>
                  <i className="uil uil-external-link-alt button-icon"></i>
                  Visit
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {modalItem && (
        <div className="portfolio-popup open" onClick={() => setModalItem(null)}>
          <div className="portfolio-popup-inner" onClick={(e) => e.stopPropagation()}>
            <div className="portfolio-popup-content grid">
              <span className="portfolio-popup-close" onClick={() => setModalItem(null)}>
                <i className="uil uil-times"></i>
              </span>
              <div className="pp-thumbnail">
                <img src={modalItem.image} alt={modalItem.title} className="portfolio-popup-img" />
              </div>
              <div className="portfolio-popup-info">
                <div className="portfolio-popup-subtitle">
                  Featured - <span>{modalItem.category}</span>
                </div>
                <div className="portfolio-popup-body">
                  <h3 className="details-title">{modalItem.details?.title || modalItem.title}</h3>
                  <p className="details-description">{modalItem.description}</p>
                  <ul className="details-info">
                    {modalItem.details?.year && (
                      <li>
                        Created - <span>{modalItem.details.year}</span>
                      </li>
                    )}
                    {modalItem.details?.technologies?.length && (
                      <li>
                        Technologies - <span>{modalItem.details.technologies.join(", ")}</span>
                      </li>
                    )}
                    <li>
                      Role - <span>{modalItem.details.role}</span>
                    </li>
                  </ul>
                  {modalItem.link && (
                    <a href={modalItem.link} target="_blank" rel="noopener noreferrer" className="button" style={{ marginTop: '1.5rem' }}>
                      <i className="uil uil-external-link-alt button-icon"></i>
                      Visit
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Work
