import { ArrowUpRight } from "@phosphor-icons/react";

// Renders text from content.js: either a plain string, or a list of pieces —
// plain strings, { bold } for bold words, { highlight } for emphasised words,
// or { link, href } for external links.
export default function RichText({ parts }) {
  if (typeof parts === "string") return parts;
  return parts.map((part, i) => {
    if (typeof part === "string") return part;
    if (part.bold) return <strong key={i}>{part.bold}</strong>;
    if (part.highlight) {
      return (
        <em className="highlight" key={i}>
          {part.highlight}
        </em>
      );
    }
    if (part.link && part.href.startsWith("mailto:")) {
      return (
        <a className="text-link" href={part.href} key={i}>
          {part.link}
        </a>
      );
    }
    if (part.link) {
      return (
        <a className="text-link" href={part.href} target="_blank" rel="noopener noreferrer" key={i}>
          {part.link}
          <ArrowUpRight size="0.8em" weight="bold" aria-hidden="true" />
        </a>
      );
    }
    return null;
  });
}
