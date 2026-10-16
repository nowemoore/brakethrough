import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Subfolder the site is served from, e.g. "/brakethrough/" on GitHub Pages (set by the deploy workflow)
  base: process.env.BASE_PATH || "/",
  server: {
    // Windows file events sometimes miss rapid successive saves, leaving the dev server
    // serving a stale (even empty) file. Polling is slightly heavier but never misses one.
    watch: { usePolling: true, interval: 150 },
  },
});
