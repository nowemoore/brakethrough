import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Subfolder the site is served from. The public address is pacing.tech/fellowship/: the pacing.tech
  // site (paradigm-3-institute/pace, on Netlify) proxies /fellowship/* to this GitHub Pages site, so
  // links and assets must use that path. This overrides the BASE_PATH the deploy workflow sets; to serve
  // the site straight from GitHub Pages again, go back to: process.env.BASE_PATH || "/"
  base: "/fellowship/",
  server: {
    // Windows file events sometimes miss rapid successive saves, leaving the dev server
    // serving a stale (even empty) file. Polling is slightly heavier but never misses one.
    watch: { usePolling: true, interval: 150 },
  },
});
