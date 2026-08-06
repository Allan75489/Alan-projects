import React from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import "./Footer.css";

const LINKS = [
  { icon: Github, label: "GitHub", href: "https://github.com/Allan75489" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/allan-gustavo-da-silva-carvalho-ba97813b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/allangustavocarvalho?igsh=MXg2dzA2dmQzd2p4NQ==" },
  { icon: Mail, label: "Email", href: "mailto:alangustavodasilvacarvalho@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <div className="brand footer-brand">
          <span className="brand-caret">_</span>
        </div>
        <div className="footer-links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
              <l.icon size={16} />
              {l.label}
            </a>
          ))}
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Allan Gustavo.</p>
      </div>
    </footer>
  );
}
