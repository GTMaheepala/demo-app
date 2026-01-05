import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import { useState, useEffect } from 'react';

const filters = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "app", label: "App" },
  { key: "design", label: "Design" }
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [portfolio, setPortfolio] = useState(undefined);
  const [skills, setSkills] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    const originalHref = link ? link.href : null;
    const newIcon = '/images/tharuwa.png';
    const timer = setTimeout(() => {
      if (link) {
        link.href = newIcon;
      } else {
        const l = document.createElement('link');
        l.rel = 'icon';
        l.href = newIcon;
        document.head.appendChild(l);
      }
    }, 800);

    return () => {
      clearTimeout(timer);
      if (link && originalHref) link.href = originalHref;
    };
  }, []);

  useEffect(() => {
    const selector = 'section, .work-card, .home-container, .about-img, .skills-container, .services-content, .contact-container, .footer-bg';
    const elems = Array.from(document.querySelectorAll(selector));
    elems.forEach((el) => el.classList.add('reveal'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.12 }
    );

    elems.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="page">
      <div className="nav-toggle" onClick={() => setSidebarOpen(true)}>
        <i className="uil uil-bars"></i>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} theme={theme} toggleTheme={toggleTheme} />
      <main className="main">
        <Home />
        <About />
        {loading && <p className="muted center">Loading content...</p>}
        {error && <p className="error center">{error}</p>}
        {!loading && !error && (
          <>
            <Skills groups={skills} />
            <Work items={portfolio} />
            <Services />
          </>
        )}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
