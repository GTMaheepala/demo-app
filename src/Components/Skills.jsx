import React, { useState } from 'react'
import SectionTitle from './SectionTitle'

const defaultSkills = [
  {
    title: "Frontend Development",
    subtitle: "2 Years Experience",
    skills: [
      { name: "React", level: 70 },
      { name: "JavaScript", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 }
    ]
  },
  {
    title: "UI/UX Design",
    subtitle: "1 Years Experience",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Prototyping", level: 80 },
      { name: "PhotoShop", level: 75 },
      { name: "Wireframing", level: 90 }
    ]
  },
  {
    title: "Backend Development",
    subtitle: "2 Year Experience",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "PHP", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "Java", level: 60 },
      { name: "Python", level: 50 },
      { name: "NodeJS", level: 60 },
      { name: "Kotlin", level: 55 },
      { name: "C/C++", level: 70 }
    ]
  }
];

function Skills({ groups = defaultSkills }) {
  const [active, setActive] = useState(0);

  const current = groups[active] || { skills: [], title: "", subtitle: "" };

  return (
    <section className="skills section" id="skills">
      <SectionTitle heading="My Abilities" title="My Experience" />
      <div className="skills-container container grid">
        <div className="skills-tabs">
          {groups.map((g, idx) => (
            <div
              key={g.title}
              className={`skills-header ${active === idx ? "skills-active" : ""}`}
              data-target={`#${g.title}`}
              onClick={() => setActive(idx)}
            >
              <i className="uil uil-brackets-curly skills-icon"></i>
              <div>
                <h1 className="skills-title">{g.title}</h1>
                <span className="skills-subtitle">{g.subtitle}</span>
              </div>
              <i className="uil uil-angle-down skills-arrow"></i>
            </div>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-group skills-active" data-content id="frontend">
            <div className="skills-list grid">
              {current.skills.map((skill) => (
                <div key={skill.name} className="skills-data">
                  <div className="skills-titles">
                    <h3 className="skills-name">{skill.name}</h3>
                    <span className="skills-number">{skill.level}%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage" style={{ width: `${skill.level}%` }}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
