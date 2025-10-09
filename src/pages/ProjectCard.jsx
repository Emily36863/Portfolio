// src/pages/ProjectCard.jsx
import { Link } from "react-router-dom";

export default function ProjectCard({
  slug,
  title,
  blurb,
  tech,
  thumb,
  github,
  demo,
}) {
  return (
    <article className="project-card">
      {thumb && (
        <Link to={`/projects/${slug}`} aria-label={`${title} details`}>
          <img
            src={thumb}
            alt=""
            style={{
              width: "100%",
              height: 180,
              objectFit: "cover",
              borderRadius: 12,
              marginBottom: 12,
              border: "1px solid #e5e7eb",
            }}
          />
        </Link>
      )}

      <h3>
        <Link to={`/projects/${slug}`}>{title}</Link>
      </h3>
      <p>{blurb}</p>

      <div className="meta-row" style={{ marginTop: 10 }}>
        {tech?.slice(0, 4).map((t) => (
          <span key={t} className="badge-soft">
            {t}
          </span>
        ))}
      </div>

      <div className="project-links">
        {github && (
          <a
            className="btn secondary"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            🔗 GitHub
          </a>
        )}
        {demo && (
          <a
            className="btn primary"
            href={demo}
            target="_blank"
            rel="noreferrer"
          >
            🚀 Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
