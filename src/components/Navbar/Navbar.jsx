import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="brand">
        </Link>

        <div className="nav-links">
          <Link to="/#stats">Stack</Link>
          <Link to="/#projects">Projetos</Link>
          <Link to="/#contact">Contato</Link>
        </div>

        <a
          className="nav-cta"
          href="https://github.com/Allan75489"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={15} />
          <span>GitHub</span>
        </a>
      </div>
    </nav>
  );
}
