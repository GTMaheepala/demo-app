import React from 'react'
import SectionTitle from './SectionTitle'

function About() {
  return (
    <section className="about section" id="about">
      <SectionTitle heading="My Intro" title="About me" />
      <div className="about-container container grid">
        <img src="\IMG_6448.PNG" alt="About" className="about-img" />
        <div className="about-data">
          <h3 className="about-heading">Hi, I'm Tharusha Thathsara, based in Sri Lanka</h3>
          <p className="about-description">
            I'm a software engineering undergraduate with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success . Skilled leader who has the proven ability to motivate, educate and manage a team. Also a hardworking, flexible, enthusiastic and self-motivated individual with a friendly attitude. I believe that I have good interpersonal and communication skills, which makes me getting along and working with people easily.
          </p>
          <div className="about-info">
            <div className="about-box">
              <i className="uil uil-award about-icon"></i>
              <h3 className="about-title">Experience</h3>
              <span className="about-subtitle">2 + Years</span>
            </div>
            <div className="about-box">
              <i className="uil uil-suitcase-alt about-icon"></i>
              <h3 className="about-title">Completed</h3>
              <span className="about-subtitle">3 + Projects</span>
            </div>
            
          </div>
          <a href="#contact" className="button">
            <i className="uil uil-navigator button-icon"></i>Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About
