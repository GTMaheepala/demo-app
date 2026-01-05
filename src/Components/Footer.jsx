import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container container grid">
          <div>
            <h1 className="footer-title">Tharusha</h1>
            <span className="footer-subtitle">Full Stack Developer</span>
          </div>
          <ul className="footer-links">
            <li>
              <a href="#services" className="footer-links">Services</a>
            </li>
            <li>
              <a href="#work" className="footer-links">Work</a>
            </li>
            <li>
              <a href="#contact" className="footer-links">Contact</a>
            </li>
          </ul>
          <div className="footer-socials">
            <a href="https://web.facebook.com/tharusha.thathsara.568?mibextid=wwXIfr&_rdc=1&_rdr#" target="_blank" rel="noreferrer" className="footer-social">
              <i className="uil uil-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/tharu.t.m?igsh=MWd1YzIzMGFla2FtcA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="footer-social">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="https://x.com/tharushatm?s=21" target="_blank" rel="noreferrer" className="footer-social">
              <i className="uil uil-twitter"></i>
            </a>
          </div>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} <a href="#">Tharusha</a>. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer
