import React from "react";
import { Sparkles, Atom, Braces, Terminal as TerminalIcon, Layers } from "lucide-react";
import Reveal from "../../hooks/useReveal.jsx";
import "./Stats.css";

const STATS = [
  { label: "Projetos Desenvolvidos", value: "12+", icon: Sparkles },
  { label: "React", value: "Frontend", icon: Atom },
  { label: "JavaScript", value: "Core", icon: Braces },
  { label: "Python", value: "Automação", icon: TerminalIcon },
  { label: "Sistemas para Internet", value: "Full Stack", icon: Layers },
];

export default function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="section-inner">
        <div className="stats-grid">
          {STATS.map((s, idx) => (
            <Reveal as="div" delay={idx * 60} key={s.label} className="stat-card">
              <s.icon size={20} className="stat-icon" />
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
