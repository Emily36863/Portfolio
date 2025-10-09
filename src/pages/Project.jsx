import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function cleanText(s = "") {
  return s.replace(/\*\*/g, "");
} // remove stray **

function Body({ text }) {
  const lines = cleanText(text).split("\n").filter(Boolean);
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
      <section className="section">
        <h2>Project not found</h2>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </section>
    );
  }

  const heroImg = project.cover || project.gallery?.[0] || null;

  return (
    <main className="content">
      {/* Back button */}
      <nav className="section" style={{ marginBottom: 16, padding: 12 }}>
        <Link to="..">← Back to projects</Link>
      </nav>

      {/* HERO: centered title + summary; optional hero image below */}
      <section className="section project-hero">
        <div className="project-hero-inner">
          <div className="prose-max">
            <h1 style={{ margin: 0 }}>{project.title}</h1>
            {project.summary && (
              <p
                style={{
                  color: "#4b5563",
                  margin: "8px auto 0",
                  maxWidth: 820,
                }}
              >
                {project.summary}
              </p>
            )}
          </div>

          {heroImg && (
            <div className="hero-media">
              <img src={heroImg} alt="" loading="eager" />
            </div>
          )}
        </div>
      </section>

      {/* BODY: card same width as title, text constrained */}
      <article className="section" aria-labelledby="case-title">
        <div className="prose-max case-prose">
          {/* Overview */}
          {project.sections?.find((s) => s.heading === "Overview") && (
            <>
              <h2>Overview</h2>
              <Body
                text={
                  project.sections.find((s) => s.heading === "Overview").body
                }
              />
            </>
          )}

          {/* Key Features (optional) */}
          {Array.isArray(project.featuresMedia) &&
            project.featuresMedia.length > 0 && (
              <>
                <h2 style={{ marginTop: 20 }}>Key Features</h2>
                {project.featuresMedia.map((f, idx) => (
                  <div
                    key={f.title || idx}
                    className={`feature-row ${idx % 2 ? "reverse" : ""}`}
                  >
                    <div
                      className="feature-media"
                      onClick={() => f.img && setLightboxSrc(f.img)}
                      style={{ cursor: f.img ? "zoom-in" : "default" }}
                    >
                      {f.img ? <img src={f.img} alt="" loading="lazy" /> : null}
                    </div>
                    <div>
                      {f.title ? <h3>{cleanText(f.title)}</h3> : null}
                      {f.text ? <Body text={f.text} /> : null}
                    </div>
                  </div>
                ))}
              </>
            )}

          {/* Tech Used */}
          {project.sections?.find(
            (s) => s.heading === "Tech Stack" || s.heading === "Tech Used"
          ) && (
            <>
              <h2>Tech Used</h2>
              <Body
                text={
                  (
                    project.sections.find((s) => s.heading === "Tech Used") ||
                    project.sections.find((s) => s.heading === "Tech Stack")
                  ).body
                }
              />
            </>
          )}

          {/* Challenges (accordion) */}
          {project.sections?.find((s) => s.heading.includes("Challenges")) && (
            <section style={{ marginTop: 18 }}>
              <details>
                <summary>
                  <h3 style={{ display: "inline" }}>Challenges Solved</h3>
                  <span className="badge">Tap to expand</span>
                </summary>
                <Body
                  text={
                    project.sections.find((s) =>
                      s.heading.includes("Challenges")
                    ).body
                  }
                />
              </details>
            </section>
          )}

          {/* Reflection (accordion) */}
          {project.sections?.find((s) => s.heading === "Reflection") && (
            <section style={{ marginTop: 8 }}>
              <details>
                <summary>
                  <h3 style={{ display: "inline" }}>Reflection</h3>
                  <span className="badge">Tap to expand</span>
                </summary>
                <Body
                  text={
                    project.sections.find((s) => s.heading === "Reflection")
                      .body
                  }
                />
              </details>
            </section>
          )}
        </div>
      </article>

      {/* LIGHTBOX */}
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
    </main>
  );
}
