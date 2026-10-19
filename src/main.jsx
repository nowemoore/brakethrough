import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { about, home, programme, team } from "./data/content.js";
import "./styles.css";
import { asset } from "./lib/asset.js";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    {/* No trailing slash, so /fellowship matches as well as /fellowship/ */}
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Keep the page hidden (see index.html) until images and fonts are in, then fade it in,
// so nothing pops in after the layout appears. Never wait longer than MAX_WAIT_MS.
const MAX_WAIT_MS = 3000;

const images = [
  "/logo.png",
  home.stripe.image,
  ...home.supporters.items.map((s) => s.logo),
  ...about.sections.map((s) => s.card?.image),
  ...about.sections.map((s) => s.stripe?.image),
  programme.about.stripeAfter?.image,
  programme.topics.stripeAfter?.image,
  programme.fit.stripeAfter?.image,
  ...team.people.map((p) => p.photo),
].filter(Boolean).map(asset);

// Every font face the site uses. Requesting them explicitly matters: document.fonts.ready
// alone resolves before React has rendered any text, i.e. before any font is requested.
const fonts = ['500 1em "Figtree"', '600 1em "Figtree"', '700 1em "Figtree"', 'italic 700 1em "Lora"'];

// Download *and* decode, so the image paints the moment the page is shown
const loadImage = (src) => {
  const img = new Image();
  img.src = src;
  return img.decode().catch(() => {});
};

// Wait for layout with the final fonts. Frames don't fire in background tabs, hence the timer fallback.
const nextFrame = () =>
  new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
    setTimeout(resolve, 100);
  });

Promise.race([
  Promise.all([
    ...images.map(loadImage),
    ...fonts.map((f) => document.fonts.load(f).catch(() => {})),
  ]),
  new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS)),
])
  .then(nextFrame) // let the browser lay out with the final fonts before revealing
  .then(() => root.classList.add("ready"));
