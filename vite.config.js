import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // <-- IMPORTANT for GitHub Pages project sites
  build: { outDir: "docs" }, // <-- your Pages source is /docs on main
});
