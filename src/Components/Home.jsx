import React from 'react'

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container container grid">
        <div className="home-social">
          <span className="home-social-follow">Follow Me</span>
          <div className="home-social-links">
            <a href="https://web.facebook.com/tharusha.thathsara.568?mibextid=wwXIfr&_rdc=1&_rdr#" target="_blank" rel="noreferrer" className="home-social-link">
              <i className="uil uil-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/tharu.t.m?igsh=MWd1YzIzMGFla2FtcA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="home-social-link">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="https://x.com/tharushatm?s=21" target="_blank" rel="noreferrer" className="home-social-link">
              <i className="uil uil-twitter"></i>
            </a>
            <a href="https://github.com/GTMaheepala" target="_blank" rel="noreferrer" className="home-social-link">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>



        <div className="home-data">
          <h1 className="home-title">Hi, I'm Tharusha Thathsara</h1>
          <h3 className="home-subtitle">Full Stack Developer</h3>
          <p className="home-description">
            I’m a software engineering undergraduate who enjoys building efficient, innovative solutions that help organizations succeed. I’m a motivated team player with strong leadership and communication skills, known for being hardworking, adaptable, and enthusiastic when working with others.
          </p>
          <div className="home-buttons">
            <a href="#about" className="button">
              <i className="uil uil-user button-icon"></i>
              More About me!
            </a>
            <a href="/Tharusha Thathsara CV 2026.pdf" className="button">
              <i className="uil uil-file-download button-icon"></i>
              Download CV
            </a>
          </div>
        </div>

        <div className="my-info">
          <div className="info-item-l">
            <a href="https://www.linkedin.com/in/tharusha-thathsara-a4abb3302" target="_blank" rel="noreferrer">
                <i className="uil uil-linkedin social-share"></i>
            </a>
            <div>
              <h3 className="info-title">LinkedIn</h3>
              <span className="info-subtitle">Tharusha Thathsara</span>
            </div>
          </div>

          <div className="info-item">
            <a
                href="https://wa.me/94760523136"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="uil uil-whatsapp info-icon"></i>
            </a>
            <div>
              <h3 className="info-title">Whatsapp</h3>
              <span className="info-subtitle">+94 76 052 3136</span>
            </div>
          </div>

          <div className="info-item">
            <a href="mailto:tharushathathsara37@gmail.com" title="Email me">
                <i className="uil uil-envelope-edit info-icon"></i>
            </a>
            <div>
              <h3 className="info-title">Email</h3>
              <span className="info-subtitle">tharushathathsara37@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home
