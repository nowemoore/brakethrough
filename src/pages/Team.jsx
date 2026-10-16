import RichText from "../components/RichText.jsx";
import { team } from "../data/content.js";
import { asset } from "../lib/asset.js";

export default function Team() {
  return (
    <section>
      <h1>{team.title}</h1>
      <div className="team-intro">
        {team.intro.map((para, i) => (
          <p className="lead" key={i}>
            <RichText parts={para} />
          </p>
        ))}
      </div>
      <ul className="team">
        {team.people.map((m, i) => (
          <li key={i}>
            {m.photo ? <img className="avatar" src={asset(m.photo)} alt={m.name} /> : <div className="avatar" aria-hidden="true" />}
            <h2>{m.name}</h2>
            <p>{m.bio}</p>
          </li>
        ))}
      </ul>
      <div className="team-outro">
        {team.outro.map((para, i) => (
          <p key={i}>
            <RichText parts={para} />
          </p>
        ))}
      </div>
    </section>
  );
}
