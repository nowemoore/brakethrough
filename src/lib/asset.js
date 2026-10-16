// Paths in content.js are written from the site root ("/logo.png"). When the site is
// served from a subfolder (e.g. GitHub Pages at /brakethrough/), prefix them with it.
export const asset = (path) => (path && path.startsWith("/") ? import.meta.env.BASE_URL + path.slice(1) : path);
