import { asset } from "../lib/asset.js";

// Full-width picture that stays fixed while the page scrolls over it.
// With no image, shows a placeholder pattern. `className` adds spacing variants.
export default function PhotoStripe({ image, alt, position, className = "" }) {
  return (
    <div
      className={`photo-stripe ${className}`.trim()}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      <div
        className={`photo-stripe-bg${image ? "" : " is-placeholder"}`}
        style={image ? { backgroundImage: `url(${asset(image)})`, backgroundPosition: position } : undefined}
      />
    </div>
  );
}
