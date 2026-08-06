import React from "react";
import { Atom, Braces, Terminal as TerminalIcon, Smartphone, Code2, Coffee, Layers } from "lucide-react";
import Reveal from "../../hooks/useReveal.jsx";
import { CATEGORIES } from "../../data/projects.js";
import "./FilterBar.css";

const ICONS = {
  Todos: Layers,
  React: Atom,
  JavaScript: Braces,
  Python: TerminalIcon,
  "React Native": Smartphone,
  "HTML/CSS": Code2,
  Java: Coffee,
};

export default function FilterBar({ active, onChange }) {
  return (
    <Reveal className="filter-row" delay={80}>
      {CATEGORIES.map((cat) => {
        const Icon = ICONS[cat];
        return (
          <button
            key={cat}
            className={`filter-pill ${active === cat ? "filter-pill-active" : ""}`}
            onClick={() => onChange(cat)}
          >
            <Icon size={14} />
            {cat}
          </button>
        );
      })}
    </Reveal>
  );
}
