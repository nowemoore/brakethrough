import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { APPLY_URL } from "../data/content.js";
import { asset } from "../lib/asset.js";

const links = [
  { to: "/about", label: "About" },
  { to: "/programme", label: "Programme" },
  { to: "/team", label: "Team" },
];

export default function Navbar() {
  // Phone menu (the toggle only shows on narrow screens; see styles.css)
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const { pathname } = useLocation();

  // Close on page change
  useEffect(() => setMenuOpen(false), [pathname]);

  // Close on Escape or a tap outside the navbar
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const onPointer = (e) => navRef.current && !navRef.current.contains(e.target) && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [menuOpen]);

  return (
    <nav className={`nav${menuOpen ? " menu-open" : ""}`} ref={navRef}>
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="Brakethrough home">
          <img src={asset("/logo.png")} alt="Brakethrough" width="556" height="105" />
        </Link>
        <div className="links" id="nav-links">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end>
              {label}
            </NavLink>
          ))}
        </div>
        <a className="apply" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
          Apply
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>
    </nav>
  );
}
