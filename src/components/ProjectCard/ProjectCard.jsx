import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Github, ArrowRight, ImageOff } from "lucide-react";
import Reveal from "../../hooks/useReveal.jsx";
import "./ProjectCard.css";

export default function ProjectCard({ project, delay = 0 }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Reveal delay={delay} className="project-card" as="article">
      <Link to={`/projeto/${project.id}`} className="project-card-open">
        <div className="project-thumb">
          <div className="tab-chrome">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
            <span className="tab-filename">{project.file}</span>
          </div>
          <div className="project-thumb-art">
            {imgError ? (
              <ImageOff size={30} strokeWidth={1.3} />
            ) : (
              <img
                src={project.image}
                alt={`Captura de tela do projeto ${project.name}`}
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </div>

        <div className="project-body">
          <div className="project-head">
            <h3>{project.name}</h3>
            <span className="project-category">{project.category}</span>
          </div>
          <p className="project-short">{project.short}</p>
          <div className="tech-row">
            {project.techs.map((t) => (
              <span key={t} className="tech-chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className="project-actions">
        <a
          className="btn btn-ghost btn-sm"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={14} />
          Código
        </a>
        <Link className="btn btn-primary btn-sm" to={`/projeto/${project.id}`}>
          Ver Projeto
          <ArrowRight size={14} />
        </Link>
      </div>
    </Reveal>
  );
}
