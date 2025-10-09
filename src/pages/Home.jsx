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
          tech-for-good.
        </p>
      </header>

      <div className="home-grid">
        {/* LEFT: About (sticky) + Skills under it */}
        <div className="left-col about-panel">
          <section className="section about">
            <h2>About Me</h2>
            <p>
              I'm passionate about building intuitive, inclusive digital
              experiences. I enjoy combining design with technical thinking and
              love working on meaningful projects that make everyday life
              easier.
            </p>
          </section>

          <section className="section skills">
            <h2>Skills</h2>
            <ul className="skills-list">
              <li>React</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>HTML &amp; CSS</li>
              <li>CryptoJS</li>
              <li>Figma</li>
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
                  <Link to={`/projects/${p.slug}`}>{p.title}</Link>
                </h3>
                <p>{p.summary}</p>
                <div className="meta-row" style={{ marginTop: 8 }}>
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="badge-soft">
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: 10 }}>
                  <Link to={`/projects/${p.slug}`}>Read case study →</Link>
                </div>
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
