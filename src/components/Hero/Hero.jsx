import React, { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";
import Reveal from "../../hooks/useReveal.jsx";
import "./Hero.css";

const ROLE_TEXT = "Desenvolvedor Full Stack";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(ROLE_TEXT);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(ROLE_TEXT.slice(0, i));
      if (i >= ROLE_TEXT.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="hero" id="top">
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />
      <div className="hero-grid" />

      <div className="hero-inner">
        <Reveal className="hero-copy">
          <h1 className="hero-name">
            Allan <span className="text-accent">Gustavo</span>
          </h1>
          <p className="hero-role">
          </p>
          <p className="hero-desc">
            Apaixonado por tecnologia e por transformar ideias em soluções digitais.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://github.com/Allan75489"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              className="btn btn-outline"
              href="https://www.linkedin.com/in/allan-gustavo-da-silva-carvalho-ba97813b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="hero-portrait-wrap">
          <div className="hero-terminal">
            <div className="tab-chrome">
              <span className="dot dot-r" />
              <span className="dot dot-y" />
              <span className="dot dot-g" />
              <span className="tab-filename">allan.profile</span>
            </div>
            <div className="hero-terminal-body">
              <div className="avatar-ring">
                <div className="avatar-glow" />
                {imgError ? (
                  <div className="avatar-circle">AG</div>
                ) : (
                  <img
                    src="/foto.png"
                    alt="Foto de perfil de Allan Gustavo"
                    className="avatar-img"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
              <div className="hero-badges">
                {["React", "JavaScript", "Python", "Node"].map((t) => (
                  <span key={t} className="badge-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="scroll-cue">
        <span />
      </div>
    </header>
  );
}
