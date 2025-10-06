import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

function NotFound() {
  return (
    <div className="section">
      <h2>Page not found</h2>
      <p>Try the homepage.</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Emily Thomson Kearney</span>
        <span className="dot">•</span>
        <a href="mailto:emily36863@gmail.com">Contact</a>
      </footer>
    </div>
  );
}
