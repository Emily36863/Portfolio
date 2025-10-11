// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="content">
      <header className="header">
        <h1>Emily Thomson Kearney</h1>
        <p>
          Computer Science graduate exploring UX/UI, secure development &
          tech-for-good solutions.
        </p>
      </header>

      <div className="home-grid">
        {/* LEFT: About (sticky) + Skills under it */}
        <div className="left-col about-panel">
          <section className="section about">
            <h2>About Me</h2>
            <p>
              I create intuitive, inclusive digital experiences that make
              everyday life easier. With a background in computer science, I
              understand how systems connect beneath the surface and use
              AI-assisted tools to design interfaces that are accessible,
              secure, and meaningful.
            </p>
          </section>

          <section className="section skills">
            <h2>Skills</h2>
            <ul className="skills-list">
              <li>React</li>
              <li>JavaScript</li>
              <li>System-Thinking</li>
              <li>HTML &amp; CSS</li>
              <li>Figma</li>
              <li>AI-Assisted Development</li>
              <li>Data Flow</li>
            </ul>
          </section>
        </div>

        {/* RIGHT: Projects */}
        <section className="section projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <article key={p.slug} className="project-card">
                <h3 className="project-title">
                  <Link to={`/projects/${p.slug}`} className="project-link">
                    {p.title}
                    <span className="arrow">→</span>
                  </Link>
                </h3>

                <p>{p.summary}</p>

                <div className="meta-row" style={{ marginTop: 8 }}>
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="badge-soft">
                      {t}
                    </span>
                  ))}
                </div>

                {/* removed "Read case study" block */}
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Contact */}
      <section className="section contact" id="contact">
        <h2>Contact</h2>
        <div className="contact-row">
          <p>
            Email:{" "}
            <a href="mailto:emilytk368@gmail.com">emilytk368@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/emilytk"
              target="_blank"
              rel="noreferrer"
            >
              View my LinkedIn
            </a>
          </p>
          <p>
            <a href="/Emily-Thomson-Kearney-CV.pdf" download>
              Download my CV
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
