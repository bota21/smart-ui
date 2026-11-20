"use client";

import { useEffect, useState } from "react";

export default function ZoomableImage({ src, alt, className }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => setIsOpen(true)}
        style={{ cursor: "zoom-in" }}
      />

      {isOpen && (
        <div className="zoom-image-overlay" onClick={() => setIsOpen(false)}>
          <button
            type="button"
            className="zoom-image-close"
            onClick={() => setIsOpen(false)}
            aria-label="Закрыть"
          >
            ×
          </button>

          <img
            src={src}
            alt={alt}
            className="zoom-image-large"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
