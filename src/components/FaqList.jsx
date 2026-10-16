import { useId, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import RichText from "./RichText.jsx";

// Expandable question/answer list; answers slide open smoothly
export default function FaqList({ items }) {
  const [open, setOpen] = useState(() => new Set());
  const baseId = useId();

  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <div className="faq">
      {items.map(({ q, a }, i) => {
        const isOpen = open.has(i);
        const panelId = `${baseId}-${i}`;
        return (
          <div className={`faq-item${isOpen ? " is-open" : ""}`} key={q}>
            <button className="faq-question" aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggle(i)}>
              {q}
              <CaretDown size={20} weight="bold" aria-hidden="true" />
            </button>
            <div className="faq-panel" id={panelId} role="region" inert={!isOpen}>
              <div className="faq-panel-inner">
                <p className="faq-answer">
                  <RichText parts={a} />
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
