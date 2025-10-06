// pages/Project.jsx
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function Body({ text }) {
  const lines = text.split("\n").filter(Boolean);
  const bulletLines = lines.filter((l) => l.trim().startsWith("•"));
  if (bulletLines.length >= 2) {
    return (
      <ul>
        {bulletLines.map((l, i) => (
          <li key={i}>{l.replace(/^•\s*/, "")}</li>
        ))}
      </ul>
    );
  }
  return lines.map((p, i) => <p key={i}>{p}</p>);
}

export default function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  if (!project) {
    return (
      <div className="section">
        <h2>Project not found</h2>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    );
  }

  const hasAside =
    (project.tech?.length || 0) > 0 || project.repo || project.demo;

  return (
    <article className="section" aria-labelledby="case-title">
      <nav style={{ marginBottom: 12 }}>
        <Link to="..">← Back to projects</Link>
      </nav>

      {/* HERO */}
      <header className="project-hero">
        <div className="project-hero-inner">
          {project.cover && (
            <div className="hero-media">
              <img
                src={project.cover}
                alt={`${project.title} cover`}
                loading="eager"
              />
            </div>
          )}
          <div>
            <h1 id="case-title" style={{ margin: 0 }}>
              {project.title}
            </h1>
            <p style={{ color: "#4b5563", margin: "8px 0 0" }}>
              {project.summary}
            </p>
            <div className="meta-row">
              {project.tech?.slice(0, 5).map((t) => (
                <span className="badge-soft" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className={`project-body ${hasAside ? "has-aside" : ""}`}>
        <div className="case-prose">
          {/* Optional image gallery */}
          {project.gallery?.length > 0 && (
            <section className="gallery">
              <h3>UI Gallery</h3>
              <div className="gallery-grid" role="list">
                {project.gallery.map((src, i) => (
                  <button
                    key={src}
                    className="gallery-item"
                    onClick={() => setLightboxSrc(src)}
                    aria-label={`Open image ${i + 1} in lightbox`}
                    style={{
                      border: "none",
                      padding: 0,
                      background: "transparent",
                    }}
                  >
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </section>
          )}

          {project.sections?.map((s) => (
            <section key={s.heading} style={{ marginBottom: 20 }}>
              {["Design Challenges & Solutions", "Reflection"].includes(
                s.heading
              ) ? (
                <details>
                  <summary>
                    <h3 style={{ display: "inline" }}>{s.heading}</h3>
                    <span className="badge">Tap to expand</span>
                  </summary>
                  <Body text={s.body} />
                </details>
              ) : (
                <>
                  <h3 style={{ margin: "16px 0 8px" }}>{s.heading}</h3>
                  <Body text={s.body} />
                </>
              )}
            </section>
          ))}
        </div>

        {hasAside && (
          <aside className="aside-card" aria-label="Project meta">
            <h3>Tech</h3>
            <ul className="skills-list" style={{ marginBottom: 12 }}>
              {project.tech?.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="project-links">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </aside>
        )}
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="lightbox"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <img src={lightboxSrc} alt="Expanded project screenshot" />
          <button
            className="close"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxSrc(null);
            }}
            aria-label="Close image"
          >
            ✕
          </button>
        </div>
      )}
    </article>
  );
}
