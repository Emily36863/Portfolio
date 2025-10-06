import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      <header className="header">
        <h1>Emily Thomson Kearney</h1>
        <p>
          Computer Science graduate exploring UX/UI, secure development &
          tech-for-good.
        </p>
      </header>

      <section className="section about">
        <h2>About Me</h2>
        <p>
          I'm passionate about building intuitive, inclusive digital
          experiences. I enjoy combining design with technical thinking and love
          working on meaningful projects that make everyday life easier.
        </p>
      </section>

      <section className="section projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.slug} className="project-card">
              {/* clickable title for accessibility */}
              <h3 className="project-title">
                <Link to={`/projects/${p.slug}`}>{p.title}</Link>
              </h3>

              <p>{p.summary}</p>
              <p>
                <strong>Tech:</strong> {p.tech.join(", ")}
              </p>

              {/* invisible-but-full-card click target */}
              <Link
                to={`/projects/${p.slug}`}
                className="stretched-link"
                aria-label={`Open case study for ${p.title}`}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="section skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>CryptoJS</li>
          <li>Figma</li>
        </ul>
      </section>

      <section className="section contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:emilytk368@gmail.com">emilytk368@gmail.com</a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my GitHub
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my LinkedIn
          </a>
        </p>
      </section>
    </>
  );
}
