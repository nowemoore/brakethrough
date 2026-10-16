import { ArrowUpRight } from "@phosphor-icons/react";
import { asset } from "../lib/asset.js";

// Clickable preview of an external page, like a link preview in a chat app
export default function LinkCard({ href, image, imageAlt, title, description, site }) {
  return (
    <a className="link-card" href={href} target="_blank" rel="noopener noreferrer">
      <img className="link-card-image" src={asset(image)} alt={imageAlt} width="1200" height="630" />
      <div className="link-card-body">
        <div className="link-card-title">{title}</div>
        <p className="link-card-description">{description}</p>
        <div className="link-card-site">
          {site}
          <ArrowUpRight size="0.9em" weight="bold" aria-hidden="true" />
        </div>
      </div>
    </a>
  );
}
