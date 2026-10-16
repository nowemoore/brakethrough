import {
  AirplaneTilt,
  CalendarBlank,
  ChalkboardTeacher,
  ChatsCircle,
  Coins,
  GlobeHemisphereWest,
  UsersThree,
} from "@phosphor-icons/react";
import PhotoStripe from "../components/PhotoStripe.jsx";
import FaqList from "../components/FaqList.jsx";
import RichText from "../components/RichText.jsx";
import { programme } from "../data/content.js";

// Icons available to `icon` in content.js
const icons = { AirplaneTilt, CalendarBlank, ChalkboardTeacher, ChatsCircle, Coins, GlobeHemisphereWest, UsersThree };

const { about, topics, fit, process, faq } = programme;

export default function Programme() {
  return (
    <>
      <h1>{programme.title}</h1>
      <p className="lead">{programme.lead}</p>

      <section className="section">
        <h2 className="section-title">{about.heading}</h2>
        <ul className="icon-points">
          {about.points.map(({ icon, text }, i) => {
            const Icon = icons[icon];
            return (
              <li key={i}>
                {Icon && <Icon className="icon-point-icon" size={26} weight="duotone" aria-hidden="true" />}
                <span>
                  <RichText parts={text} />
                </span>
              </li>
            );
          })}
        </ul>
      </section>
      {about.stripeAfter && <PhotoStripe {...about.stripeAfter} />}

      <section className="section">
        <h2 className="section-title">{topics.heading}</h2>
        <p className="section-lead">{topics.lead}</p>
        <ul className="topic-list">
          {topics.items.map((t) => (
            <li key={t.heading}>
              <strong>{t.heading}:</strong> {t.body}
            </li>
          ))}
        </ul>
      </section>
      {topics.stripeAfter && <PhotoStripe {...topics.stripeAfter} />}

      <section className="section">
        <h2 className="section-title">{process.heading}</h2>
        <ol className="timeline">
          {process.steps.map((step, i) => (
            <li key={step.when}>
              <div className="timeline-marker" aria-hidden="true">
                {i + 1}
              </div>
              <h3>{step.heading}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2 className="section-title">{fit.heading}</h2>
        {fit.lead && <p className="section-lead">{fit.lead}</p>}
        <ul className="bullets">
          {fit.points.map((point, i) => (
            <li key={i}>
              <RichText parts={point} />
            </li>
          ))}
        </ul>
        <p className="note">
          <RichText parts={fit.note} />
        </p>
      </section>
      {fit.stripeAfter && <PhotoStripe {...fit.stripeAfter} />}

      <section className="section">
        <h2 className="section-title">{faq.heading}</h2>
        <FaqList items={faq.items} />
      </section>
    </>
  );
}
