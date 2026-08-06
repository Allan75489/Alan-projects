import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projeto/:id" element={<ProjectDetails />} />
      <Route
        path="*"
        element={
          <div style={{ padding: "120px 24px", textAlign: "center", color: "var(--muted)" }}>
            <p style={{ fontFamily: "var(--font-mono)" }}>404 — página não encontrada.</p>
          </div>
        }
      />
    </Routes>
  );
}
