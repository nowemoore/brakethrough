import LinkCard from "../components/LinkCard.jsx";
import PhotoStripe from "../components/PhotoStripe.jsx";
import RichText from "../components/RichText.jsx";
import { about } from "../data/content.js";
import { asset } from "../lib/asset.js";

export default function About() {
  // Alternate sides among the two-column sections only, so full-width ones don't break the rhythm
  let splitIndex = 0;

  return (
    <>
      <h1 className="sr-only">About</h1>
      {about.sections.map((s, sectionIndex) => {
        if (s.stripe) return <PhotoStripe key={sectionIndex} {...s.stripe} className="photo-stripe-divider" />;
        const layout = s.full ? "split split-full" : `split${splitIndex++ % 2 ? " split-flip" : ""}`;
        return (
          <section className={layout} key={sectionIndex}>
            <div className="split-text">
              {s.heading && <h2 className="section-title">{s.heading}</h2>}
              {s.body.map((para, i) => (
                <p key={i}>{Array.isArray(para) ? <RichText parts={para} /> : para}</p>
              ))}
              {s.card && <LinkCard {...s.card} />}
            </div>
            {s.image && !s.full && <img className="split-image" src={asset(s.image.src)} alt={s.image.alt} />}
          </section>
        );
      })}
    </>
  );
}
