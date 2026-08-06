import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../components/Hero/Hero.jsx";
import Stats from "../../components/Stats/Stats.jsx";
import FilterBar from "../../components/FilterBar/FilterBar.jsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import CTA from "../../components/CTA/CTA.jsx";
import { PROJECTS } from "../../data/projects.js";
import "./Home.css";

export default function Home() {
  const [filter, setFilter] = useState("Todos");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  const filtered = filter === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <Hero />
      <Stats />

      <section id="projects" className="projects-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-eyebrow">./projetos</p>
            <h2>Projetos em destaque</h2>
            <p className="section-sub">
              Uma seleção de sistemas web e mobile que desenvolvi do zero, do front ao back.
            </p>
          </div>

          <FilterBar active={filter} onChange={setFilter} />

          <div className="projects-grid">
            {filtered.map((p, idx) => (
              <ProjectCard project={p} key={p.id} delay={idx * 70} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="empty-state">Nenhum projeto encontrado para este filtro.</p>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
