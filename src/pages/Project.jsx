import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import SectionReveal from "../components/SectionReveal";
import ScreenshotFan from "../components/ScreenshotFan";

function cleanText(s = "") {
  return s.replace(/\*\*/g, "");
}

function Body({ text }) {
  const lines = cleanText(text || "")
    .split("\n")
    .filter(Boolean);
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
  const [heroShrink, setHeroShrink] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeroShrink(window.scrollY > 80);
    onScroll(); // initialize based on current scroll
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!project) {
    return (
      <main className="content">
        <section className="section">
          <h2>Project not found</h2>
          <p>
            <Link to="/">Back to home</Link>
          </p>
        </section>
      </main>
    );
  }

  const heroImg = project.cover || project.gallery?.[0] || null;

  return (
    <main className="content">
      {/* Floating back arrow */}
      <Link to=".." className="back-arrow" aria-label="Back to projects">
        ←
      </Link>

      {/* HERO */}
      <section
        className={`section project-hero hero ${
          heroShrink ? "hero--shrink" : ""
        } ${project.slug}`}
      >
        <div className="project-hero-inner hero__grid">
          <div className="hero__copy">
            <h1 className="hero__title">{project.title}</h1>
            {project.summary && <p className="hero__sub">{project.summary}</p>}
          </div>

          {Array.isArray(project.heroShots) && project.heroShots.length >= 3 ? (
            <ScreenshotFan shots={project.heroShots} />
          ) : heroImg ? (
            <div className="hero-media">
              <img src={heroImg} alt="" loading="eager" />
            </div>
          ) : null}
        </div>
      </section>

      {/* OVERVIEW */}
      {project.sections?.some((s) => s.heading === "Overview") && (
        <SectionReveal>
          <div className="case-prose">
            <h2>Overview</h2>
            <Body
              text={
                project.sections.find((s) => s.heading === "Overview")?.body
              }
            />
          </div>
        </SectionReveal>
      )}

      {/* KEY FEATURES */}
      {Array.isArray(project.featuresMedia) &&
      project.featuresMedia.length > 0 ? (
        <SectionReveal>
          <div className="case-prose">
            <h2 style={{ marginTop: 20 }}>Key Features</h2>
            {project.featuresMedia.map((f, idx) => (
              <div className={`feature-row ${idx % 2 ? "reverse" : ""}`}>
                <div
                  className="feature-media"
                  onClick={() => f?.img && setLightboxSrc(f.img)}
                  style={{ cursor: f?.img ? "zoom-in" : "default" }}
                >
                  {f?.img ? <img src={f.img} alt="" loading="lazy" /> : null}
                </div>
                <div className="feature-copy">
                  {f?.title ? <h3>{cleanText(f.title)}</h3> : null}
                  {f?.text ? <Body text={f.text} /> : null}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      ) : project.sections?.some((s) => s.heading === "Key Features") ? (
        <SectionReveal>
          <div className="case-prose">
            <h2 style={{ marginTop: 20 }}>Key Features</h2>
            <Body
              text={
                project.sections.find((s) => s.heading === "Key Features")?.body
              }
            />
          </div>
        </SectionReveal>
      ) : null}

      {/* TECH USED */}
      {project.sections?.some(
        (s) => s.heading === "Tech Stack" || s.heading === "Tech Used"
      ) && (
        <SectionReveal>
          <div className="case-prose">
            <h2>Tech Used</h2>
            <Body
              text={
                project.sections.find((s) => s.heading === "Tech Used")?.body ??
                project.sections.find((s) => s.heading === "Tech Stack")?.body
              }
            />
          </div>
        </SectionReveal>
      )}

      {/* CHALLENGES */}
      {project.sections?.some((s) => s.heading?.includes?.("Challenges")) && (
        <SectionReveal>
          <div className="case-prose">
            <details>
              <summary>
                <h3 style={{ display: "inline" }}>Challenges Solved</h3>
              </summary>
              <Body
                text={
                  project.sections.find((s) =>
                    s.heading?.includes?.("Challenges")
                  )?.body
                }
              />
            </details>
          </div>
        </SectionReveal>
      )}

      {/* REFLECTION */}
      {project.sections?.some((s) => s.heading === "Reflection") && (
        <SectionReveal>
          <div className="case-prose">
            <details>
              <summary>
                <h3 style={{ display: "inline" }}>Reflection</h3>
              </summary>
              <Body
                text={
                  project.sections.find((s) => s.heading === "Reflection")?.body
                }
              />
            </details>
          </div>
        </SectionReveal>
      )}

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
