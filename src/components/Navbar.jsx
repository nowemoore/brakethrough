import { Link, NavLink } from "react-router-dom";
import { APPLY_URL } from "../data/content.js";
import { asset } from "../lib/asset.js";

const links = [
  { to: "/about", label: "About" },
  { to: "/programme", label: "Programme" },
  { to: "/team", label: "Team" },
];

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="Brakethrough home">
          <img src={asset("/logo.png")} alt="Brakethrough" width="556" height="105" />
        </Link>
        <div className="links">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end>
              {label}
            </NavLink>
          ))}
        </div>
        <a className="apply" href={APPLY_URL}>
          Apply
        </a>
      </div>
    </nav>
  );
}
