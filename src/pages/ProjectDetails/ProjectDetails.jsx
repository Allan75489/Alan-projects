import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft, ChevronRight, ImageOff } from "lucide-react";
import { getProjectById } from "../../data/projects.js";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setImgError(false);
  }, [id]);

  if (!project) {
    return (
      <div className="section-inner" style={{ padding: "120px 24px", textAlign: "center" }}>
        <p style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
          Projeto não encontrado.
        </p>
        <Link to="/" className="btn btn-outline" style={{ marginTop: 20 }}>
          <ArrowLeft size={15} />
          Voltar para a home
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-view">
      <div className="detail-grid-bg" />

      <div className="section-inner detail-inner">
        <button className="btn btn-ghost btn-sm back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={15} />
          Voltar para projetos
        </button>

        <div className="detail-banner">
          <div className="tab-chrome">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
            <span className="tab-filename">{project.file}</span>
          </div>
          <div className="detail-banner-art">
            {imgError ? (
              <ImageOff size={48} strokeWidth={1.1} />
            ) : (
              <img
                src={project.image}
                alt={`Banner do projeto ${project.name}`}
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </div>

        <div className="detail-head">
          <span className="project-category">{project.category}</span>
          <h1>{project.name}</h1>
          <p className="detail-full">{project.full}</p>
        </div>

        <div className="detail-columns">
          <div className="detail-col">
            <h4 className="detail-label">Tecnologias utilizadas</h4>
            <div className="tech-row">
              {project.techs.map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>

            <h4 className="detail-label detail-label-spaced">Principais desafios</h4>
            <ul className="challenge-list">
              {project.challenges.map((c) => (
                <li key={c}>
                  <ChevronRight size={14} className="challenge-icon" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-col">
            <h4 className="detail-label">Galeria</h4>
            <div className="gallery-grid">
              {[0, 1, 2, 3].map((i) => (
                <div className="gallery-tile" key={i}>
                  {imgError ? (
                    <ImageOff size={22} strokeWidth={1.2} />
                  ) : (
                    <img src={project.image} alt={`Imagem ${i + 1} do projeto ${project.name}`} />
                  )}
                </div>
              ))}
            </div>

            <div className="detail-links">
              <a
                className="btn btn-outline"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                Repositório
              </a>
              <a
                className="btn btn-primary"
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Ver Deploy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
