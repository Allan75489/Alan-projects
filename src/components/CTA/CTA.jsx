import React from "react";
import { Mail, Terminal as TerminalIcon } from "lucide-react";
import Reveal from "../../hooks/useReveal.jsx";
import "./CTA.css";

export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="section-inner">
        <Reveal className="cta-card">
          <div className="cta-glow" />
          <TerminalIcon size={26} className="cta-icon" />
          <h2>Têm interesse no meu trabalho?</h2>
          <p>Estou disponível para novos projetos, freelas e oportunidades full stack.</p>
          <a className="btn btn-primary btn-lg" href="mailto:alangustavodasilvacarvalho@hmail.com">
            <Mail size={17} />
            Entrar em Contato
          </a>
        </Reveal>
      </div>
    </section>
  );
}
