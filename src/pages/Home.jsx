import { Link } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";
import PhotoStripe from "../components/PhotoStripe.jsx";
import RichText from "../components/RichText.jsx";
import { APPLY_URL, home } from "../data/content.js";
import { asset } from "../lib/asset.js";

export default function Home() {
  return (
    <section className="hero">
      <h1 className="hero-logo">
        <img src={asset("/logo.png")} alt="Brakethrough" width="556" height="105" />
        <span className="hero-subtitle">Fellowship</span>
      </h1>
      <p className="statement">
        <RichText parts={home.statement} />
      </p>
      <h2 className="tagline">
        <RichText parts={home.title} />
      </h2>
      <div className="hero-actions">
        <a className="apply" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
          Apply now
        </a>
        <Link className="secondary" to="/programme">
          Learn more <CaretRight size={16} weight="bold" aria-hidden="true" />
        </Link>
      </div>
      <PhotoStripe image={home.stripe.image} alt={home.stripe.alt} />
      <div className="supporters">
        <h2 className="supporters-title">{home.supporters.heading}</h2>
        <ul className="supporters-list">
          {home.supporters.items.map((s) => (
            <li key={s.name}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                <img src={asset(s.logo)} alt="" />
                <span>{s.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
