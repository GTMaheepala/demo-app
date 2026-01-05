import React from 'react'

function Sidebar({ open, onClose, theme, toggleTheme }) {
  return (
    <aside className={`sidebar ${open ? "show-sidebar" : ""}`} id="sidebar">
      <nav className="nav">
        <div className="nav-logo">
          <span className="nav-logo-text">T</span>
        </div>
        <div className="theme-toggle" onClick={toggleTheme}>
          <i className={`uil ${theme === 'dark' ? 'uil-sun' : 'uil-moon'}`}></i>
        </div>
        <div className="nav-menu">
          <div className="menu">
            <ul className="nav-list">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#work", label: "Work" },
                { href: "#services", label: "Services" },
                { href: "#contact", label: "Contact" }
              ].map((item) => (
                <li key={item.href} className="nav-item">
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="btn-share">
          <i className="uil uil-share-alt social-share"></i>
        </div>
        <div className="nav-close" onClick={onClose}>
          <i className="uil uil-times"></i>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar
